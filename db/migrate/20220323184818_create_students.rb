class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.belongs_to :classroom, null: false, foreign_key: true
      t.string :username
      t.string :password_digest
      t.boolean :extra_time_needed
      t.integer :extra_time_amount
      t.boolean :offer_support

      t.timestamps
    end
  end
end
