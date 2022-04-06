class Teacher < ApplicationRecord
  has_secure_password
  
  validates :username, uniqueness: true
  
  validates :username, length: { minimum: 2 }
  validates :username, length: { maximum: 20 }
  validates :password, length: { minimum: 6 }
  validates :password, confirmation: true

  has_many :classrooms, dependent: :destroy
  has_many :students, through: :classrooms

end
