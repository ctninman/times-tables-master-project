class RemoveExtraTimeNeededFromStudents < ActiveRecord::Migration[7.0]
  def change
    remove_column :students, :extra_time_needed, :boolean
  end
end
