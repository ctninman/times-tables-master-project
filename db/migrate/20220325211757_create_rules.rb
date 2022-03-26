class CreateRules < ActiveRecord::Migration[7.0]
  def change
    create_table :rules do |t|
      t.text :rule
      t.text :explanation, array: true, default: []
      t.integer :related_facts
      t.text :grid_photo
      t.text :additional_explanation, array: true, default: []
      t.integer :rule_number
      t.string :rule_title

      t.timestamps
    end
  end
end
