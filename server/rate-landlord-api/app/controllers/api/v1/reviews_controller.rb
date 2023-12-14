class Apt::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :set_rental, :authenticate_devise_api_token!

  def create
    @review = @rental.reviews.new(review_params)
    devise_api_token = current_devise_api_token
    @review.user = devise_api_token.resource_owner
    redirect_to @rental
  end

  def destroy
    @review = current_devise_api_user.reviews.find(params[:id])
    @review.destroy
    redirect_to @user
  end

  private
    def set_rental
      @rental = Rental.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:title, :content, :location, :maintenance, :responsiveness, :cost)
    end
end
