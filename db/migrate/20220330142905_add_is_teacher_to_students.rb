class AddIsTeacherToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :is_teacher, :boolean
  end
end
