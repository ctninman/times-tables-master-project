class Student < ApplicationRecord
  has_secure_password

  belongs_to :classroom
  has_many :masteries, dependent: :destroy
  has_many :problems, through: :masteries

  after_create :create_student_masteries

  def mastery_percentage
    self.masteries.average(:mastery_level)*10.to_f
  end

  def mastered_facts
    self.masteries.where("mastery_level = ?", 10) 
  end

  private
    def create_student_masteries
      n = 1
      while n <= 100
        Mastery.create(mastery_level: 0, times_answered: 0, times_correct: 0, problem_id: n, student_id: self.id)
        n += 1
      end
    end

end
