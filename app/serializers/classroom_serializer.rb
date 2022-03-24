class ClassroomSerializer < ActiveModel::Serializer
  
  has_one :teacher
  has_many :students

  attributes :id, :classroom_name, :number_of_students

end
