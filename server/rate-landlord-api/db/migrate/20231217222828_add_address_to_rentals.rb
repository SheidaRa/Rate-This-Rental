class AddAddressToRentals < ActiveRecord::Migration[7.1]
  def change
    add_column :rentals, :housenumber, :string
    add_column :rentals, :street, :string
    add_column :rentals, :city, :string
  end
end
