class CreateBudgetMembers < ActiveRecord::Migration
  def change
    create_table :budget_members do |t|
      t.references :budget, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.boolean :admin

      t.timestamps null: false
    end
  end
end
