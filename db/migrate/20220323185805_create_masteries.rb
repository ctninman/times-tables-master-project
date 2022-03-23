class CreateMasteries < ActiveRecord::Migration[7.0]
  def change
    create_table :masteries do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :problem, null: false, foreign_key: true
      t.integer :mastery_level
      t.integer :times_answered
      t.integer :times_correct

      t.timestamps
    end
  end
end
