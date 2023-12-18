class AddDetailsToRentals < ActiveRecord::Migration[7.1]
  def change
    add_column :rentals, :state, :string
    add_column :rentals, :postcode, :string
    add_column :rentals, :lon, :float
    add_column :rentals, :lat, :float
    add_column :rentals, :country_code, :string
  end
end
