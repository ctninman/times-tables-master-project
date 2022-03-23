class CreateClassrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :classrooms do |t|
      t.string :classroom_name
      t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
