class Review < ApplicationRecord
  belongs_to :rental
  belongs_to :user

  def my_date
    created_at.strftime("%m/%d/%Y")
  end
end
