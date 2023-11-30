class CreateRentals < ActiveRecord::Migration[7.1]
  def change
    create_table :rentals do |t|
      t.references :address, null: false, foreign_key: true
      t.references :landlord, null: false, foreign_key: true

      t.timestamps
    end
  end
end
