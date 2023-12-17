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
      render json: @rental, include: [:landlord]
    else
      # Create and show new rental
      new_rental = Rental.create!(place_id: place_id)
      render json: new_rental, status: :created
    end
    # @rental = Rental.includes(:place_id, :landlord).find(params[:id])
    # render json: @rental, include: [:place_id, :landlord]
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

  # DELETE /rentals/1
  def destroy
    @rental.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rental
      @rental = Rental.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rental_params
      params.require(:rental).permit(:place_id)
    end
end
