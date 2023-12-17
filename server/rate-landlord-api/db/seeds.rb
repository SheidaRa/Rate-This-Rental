# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Rental.destroy_all
Landlord.destroy_all
Address.destroy_all

# require 'csv'
# require 'geocoder'

# CSV.foreach(Rails.root.join('lib/seed_csv/ramsey_addresses.csv'), headers: true) do |row|
#   landlord = Landlord.new(
#     name: Faker::FunnyName.name,
#   )
#   landlord.save

#   address = Address.new(
#     state: "MN",
#     city: row["city"],
#     zip: row["postcode"],
#     street: row["street"],
#     number: row["number"],
#     unit: row["unit"],
#   )

#   rental = Rental.new()
#   rental.landlord = landlord
#   rental.address = address
#   address.rental = rental
#   address.save
#   rental.save
# end

# # Create 20 posts
# 20.times do
#   landlord = Landlord.new(
#     name: Faker::FunnyName.name,
#   )
#   landlord.save

#   address = Address.new(
#     state: Faker::Address.state,
#     city: Faker::Address.city,
#     zip: Faker::Address.zip_code,
#     street: Faker::Address.street_address,
#     unit: Faker::Number.number,
#   )
#   address.save

#   Rental.create(
#     landlord_id: landlord.id,
#     address_id: address.id,
#   )
# end
