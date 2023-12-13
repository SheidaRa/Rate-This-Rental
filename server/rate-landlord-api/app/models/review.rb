class Review < ApplicationRecord
  belongs_to :rental
  belongs_to :profile
end
