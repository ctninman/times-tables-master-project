class ChangeExtraTimeNeededToTimeToSolve < ActiveRecord::Migration[7.0]
  def change
    rename_column :students, :extra_time_amount, :time_to_solve
  end
end
