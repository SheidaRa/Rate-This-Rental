class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!
  # , :set_rental

  def index
    place_id = params[:rental_place_id]

    # Find existing rental
    @rental = Rental.find_by(place_id: place_id)
    @reviews = @rental.reviews.all
    render json: @reviews
  end

  def by_user
    user_id = params[:user_id]
    
    # Get all reviews posted by a single user
    reviews = Review.where(user_id: user_id)
    
    render json: reviews, status: :ok
  end

  def create
    # @rental = Rental.find(params[:rental_id])
    place_id = params[:rental_place_id]

    # Find existing rental
    @rental = Rental.find_by(place_id: place_id)
    @review = @rental.reviews.new(review_params)
    devise_api_token = current_devise_api_token
    @review.user = devise_api_token.resource_owner
    if @review.save
      render json: @rental, status: :created
    end
  end

  def destroy
    @review = current_devise_api_user.reviews.find(params[:id])
    @review.destroy
    redirect_to @rental
  end

  private
    def set_rental
      place_id = params[:place_id]

    # Find existing rental
      @rental = Rental.find_by(place_id: place_id)
      # @rental = Rental.find(params[:place_id])
    end

    def review_params
      params.require(:review).permit(:title, :content, :location, :maintenance, :responsiveness, :rent)
    end
end
