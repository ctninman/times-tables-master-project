class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :classrooms
end
