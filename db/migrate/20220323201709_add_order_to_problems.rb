class AddOrderToProblems < ActiveRecord::Migration[7.0]
  def change
    add_column :problems, :fact_number, :integer
  end
end
