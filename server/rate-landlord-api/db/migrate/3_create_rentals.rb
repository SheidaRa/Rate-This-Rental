class CreateRentals < ActiveRecord::Migration[7.1]
  def change
    create_table :rentals do |t|
      t.integer :place_id, null: false
      t.text :landlord

      t.timestamps
    end
  end
end
