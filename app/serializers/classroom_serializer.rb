class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :classroom_name
  has_one :teacher
end
