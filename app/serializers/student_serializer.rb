class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :time_to_solve, :offer_support, :mastery_percentage, :masteries, :mastered_facts, :is_teacher
  has_one :classroom
  has_many :masteries
end
