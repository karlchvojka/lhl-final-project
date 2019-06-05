class AddUrlToBudgets < ActiveRecord::Migration
  def change
    add_column :budgets, :url, :string
  end
end
