class Rental < ApplicationRecord
  belongs_to :address
  belongs_to :landlord
  has_many :reviews
  accepts_nested_attributes_for :address, :landlord, :reviews
end
