class Address < ApplicationRecord
  has_one :rental
  geocoded_by :address
  after_validation :geocode
  
  def address
    [number, street, city, state, zip].compact.join(' ')
  end
end
