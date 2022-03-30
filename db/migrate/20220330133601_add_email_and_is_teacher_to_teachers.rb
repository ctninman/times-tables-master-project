class AddEmailAndIsTeacherToTeachers < ActiveRecord::Migration[7.0]
  def change
    add_column :teachers, :email, :string
    add_column :teachers, :is_teacher, :boolean
  end
end
