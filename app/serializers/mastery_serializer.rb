class MasterySerializer < ActiveModel::Serializer

  attributes :id, :mastery_level, :times_answered, :times_correct, :problem_id
  # has_one :problem

end
