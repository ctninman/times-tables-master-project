class CreateProblems < ActiveRecord::Migration[7.0]
  def change
    create_table :problems do |t|
      t.string :multiplication_fact
      t.integer :answer

      t.timestamps
    end
  end
end
