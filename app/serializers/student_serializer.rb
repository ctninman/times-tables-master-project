class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :time_to_solve, :offer_support, :mastery_percentage, :masteries, :mastered_facts, :is_teacher, :classroom_id
  
  belongs_to :classroom
  has_many :masteries
  # has_many :problems, through: :masteries
  
  # attributes :id, :username, :time_to_solve, :offer_support, :mastery_percentage, :masteries, :mastered_facts, :is_teacher

  # def masteries_with_problems
  #   self.masteries
  # end

end
