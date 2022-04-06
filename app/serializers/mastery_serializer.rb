class MasterySerializer < ActiveModel::Serializer

  attributes :id, :mastery_level, :times_answered, :times_correct, :problem
  # has_one :problem

end
