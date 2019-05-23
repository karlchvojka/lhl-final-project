class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.references :budget, index: true, foreign_key: true
      t.string :name
      t.float :amount
      t.references :user, index: true, foreign_key: true
      t.boolean :paid

      t.timestamps null: false
    end
  end
end
