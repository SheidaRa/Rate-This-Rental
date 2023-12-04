class Rental < ApplicationRecord
  belongs_to :address
  belongs_to :landlord
  has_many :reviews
end
