class Classroom < ApplicationRecord
  belongs_to :teacher
  has_many :students, dependent: :destroy

  def number_of_students
    self.students.length
  end

  # def class_mastery_level

  # end

end
