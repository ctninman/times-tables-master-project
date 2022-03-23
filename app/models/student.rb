class Student < ApplicationRecord
  belongs_to :classroom
  has_many :masteries
  has_many :problems, through: :masteries
end
