class Problem < ApplicationRecord
  has_many :masteries
  has_many :students, through: :masteries

end
