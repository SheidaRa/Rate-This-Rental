class Rental < ApplicationRecord
  # belongs_to :landlord
  has_many :reviews, dependent: :destroy
  accepts_nested_attributes_for :reviews
  validates :place_id, presence: true, uniqueness: true

  def to_param
    place_id
  end

  def location
    reviews.average(:location)
  end

  def maintenance
    reviews.average(:maintenance)
  end

  def responsiveness
    reviews.average(:responsiveness)
  end

  def rent
    reviews.average(:rent)
  end
end
