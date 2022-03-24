class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :extra_time_needed, :extra_time_amount, :offer_support, :mastery_percentage, :mastered_facts
  has_one :classroom
  has_many :masteries
end
