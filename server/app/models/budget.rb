class Budget < ActiveRecord::Base
  
  has_many :budget_members
  has_many :line_items
  has_many :users, through: :budget_members
end
