class Api::V1::RentalsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: %i[ create show update destroy ]

  # :set_rental,

  # GET /rentals
  def index
    # place_id = params[:place_id]

    # if place_id.present?
    #   @rentals = Rental.find_by(place_id: place_id)
    # else
      @rentals = Rental.all
    # end
    render json: @rentals, include: [:reviews]
  end

  # GET /rentals?place_id=123
  def show
    place_id = params[:place_id]

    # Find existing rental
    @rental = Rental.find_by(place_id: place_id)

    if @rental
      # Show existing rental
      render json: @rental
    else
      # Create and show new rental
      new_rental = Rental.create!(place_id: place_id)
      render json: new_rental, status: :created
    end
    # @rental = Rental.includes(:place_id, :landlord).find(params[:id])
    # render json: @rental, include: [:place_id, :landlord]
  end

   # GET /api/v1/rentals/:landlord_id/by_landlord
   def by_landlord
    @rentals = Rental.where(landlord: params[:place_id])

    if @rentals.any?
      render json: @rentals, include: [:reviews], status: :ok
    else
      render json: { error: 'No rentals found for the specified landlord' }, status: :not_found
    end
  end

    # GET /api/v1/rentals/:id/by_id
    def by_id
      @rental = Rental.find_by(id: params[:place_id])

      if @rental
        render json: @rental, status: :ok
      else
        render json: { error: 'Rental not found' }, status: :not_found
      end
    end

  # POST /rentals
  def create
    @rental = Rental.new(rental_params)

    if @rental.save
      render json: @rental, status: :created, location: api_v1_rental_url(@rental)
    else
      render json: @rental.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rentals/1
  def update
    if @rental.update(rental_params)
      render json: @rental
    else
      render json: @rental.errors, status: :unprocessable_entity
    end
  end

    # PUT /rentals/:id/become_landlord
    def become_landlord
      puts "Reached the become_landlord action"
      puts "Params: #{params.inspect}"
      @rental = Rental.find_by(place_id: params[:place_id])
      @rental.update_column(:landlord, params[:lord_id])
      render json: @rental
    end

  # DELETE /rentals/1
  def destroy
    @rental.destroy!
  end

      # PUT /api/v1/rentals/:place_id/update_address
      def update_address
        place_id = params[:place_id]
        @rental = Rental.find_by(place_id: place_id)

        if @rental
          # update rental fields
          @rental.housenumber = params.dig(:rental, :housenumber)
          @rental.street = params.dig(:rental, :street)
          @rental.city = params.dig(:rental, :city)
          @rental.state = params.dig(:rental, :state)
          @rental.postcode = params.dig(:rental, :postcode)
          @rental.lon = params.dig(:rental, :lon)
          @rental.lat = params.dig(:rental, :lat)
          @rental.country_code = params.dig(:rental, :country_code)

          # save update
          if @rental.save
            render json: @rental, status: :ok
          else
            render json: @rental.errors, status: :unprocessable_entity
          end
        else
          render json: { error: "Rental not found" }, status: :not_found
        end
      end

        # GET /api/v1/rentals/:place_id/similar
  def similar
    puts "Reached the similar action"
    puts "Params: #{params.inspect}"
    place_id = params[:place_id]

    # search rental using place_id
    reference_rental = Rental.find_by(place_id: place_id)

    # return rental with same street and city, limit to 4
    if reference_rental
      similar_rentals = Rental.where(street: reference_rental.street, city: reference_rental.city)
                              .where.not(id: reference_rental.id)
                              .limit(4)

      render json: similar_rentals, status: :ok
    else
      render json: { error: 'Rental not found' }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rental
      @rental = Rental.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rental_params
      params.require(:rental).permit(:place_id, :landlord)
    end
end
