class Teacher < ApplicationRecord
  has_secure_password

  has_many :classrooms, dependent: :destroy
  has_many :students, through: :classrooms

end
