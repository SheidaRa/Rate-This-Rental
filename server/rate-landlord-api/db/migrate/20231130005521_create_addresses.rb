class CreateAddresses < ActiveRecord::Migration[7.1]
  def change
    create_table :addresses do |t|
      t.text :state
      t.text :city
      t.text :zip
      t.text :street
      t.text :unit

      t.timestamps
    end
  end
end
