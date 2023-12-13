class CreateLandlords < ActiveRecord::Migration[7.1]
  def change
    create_table :landlords do |t|
      t.text :name

      t.timestamps
    end
  end
end
