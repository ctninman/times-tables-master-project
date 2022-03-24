class Student < ApplicationRecord
  has_secure_password
  
  belongs_to :classroom
  has_many :masteries
  has_many :problems, through: :masteries

  after_create :create_student_masteries

  private
    def create_student_masteries
      n = 1
      while n <= 100
        Mastery.create(mastery_level: 0, times_answered: 0, times_correct: 0, problem_id: n, student_id: self.id)
        n += 1
      end
    end

end
