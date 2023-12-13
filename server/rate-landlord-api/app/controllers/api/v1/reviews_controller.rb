class ReviewsController < ApplicationController
  before_action :set_rental

  def create
    review = @rental.reviews.create! params.required(:review).permit(:title, :content, :location, :maintenance, :responsiveness, :cost)

  
end
