class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.references :rental, null: false, foreign_key: true
      t.text :title
      t.text :content

      t.timestamps
    end
  end
end
