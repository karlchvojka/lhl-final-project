class User < ActiveRecord::Base
  has_many :line_items
  has_many :budget_members
  has_many :budgets, through: :budget_memebers
end
