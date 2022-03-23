class Mastery < ApplicationRecord
  belongs_to :student
  belongs_to :problem
end
