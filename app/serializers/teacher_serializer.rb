class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_teacher
  has_many :classrooms
end
