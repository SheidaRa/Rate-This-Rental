class Rental < ApplicationRecord
  belongs_to :address
  belongs_to :landlord
end
