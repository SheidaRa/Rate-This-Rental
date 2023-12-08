class Api::V1::RentalsController < ApplicationController
  before_action :set_rental, only: %i[ show update destroy ]

  # GET /rentals
  def index
    @rentals = Rental.includes(:address, :landlord).all
    render json: @rentals, include: [:address, :landlord]
  end

  # GET /rentals/1
  def show
    @rental = Rental.includes(:address, :landlord).find(params[:id])
    render json: @rental, include: [:address, :landlord]
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
      params.require(:rental).permit(:address_id, :landlord_id)
    end
end
