class Profile < ApplicationRecord
  belongs_to :user
  has_many :reviews
  accepts_nested_attributes_for :reviews
end
