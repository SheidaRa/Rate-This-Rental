class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.references :rental, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :content
      t.integer :location
      t.integer :maintenance
      t.integer :responsiveness
      t.integer :rent

      t.timestamps
    end
  end
end
