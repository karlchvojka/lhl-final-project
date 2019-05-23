# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

BudgetMember.destroy_all
LineItem.destroy_all

puts "Seeding db data"

## BUDGET

puts "Seeding budget"

budget = Budget.create(name: '3 Roomates Budget', total: 0.00)

## USERS

puts "Seeding users"

user1 = budget.users.create_with({last: 'Johansson', email: 'karl@email.com'}).find_or_create_by! first: 'Karl'
user2 = budget.users.create_with({last: 'Johansson', email: 'andrea@email.com'}).find_or_create_by! first: 'Andrea'
user3 = budget.users.create_with({last: 'Yeung', email: 'eden@email.com'}).find_or_create_by! first: 'Eden'

## BUDGET_MEMBERS

puts "Add budget members"

# BudgetMember.find_or_create_by!(user_id: user1.id, budget_id: budget.id)
# BudgetMember.find_or_create_by!(user_id: user2.id, budget_id: budget.id)
# BudgetMember.find_or_create_by!(user_id: user3.id, budget_id: budget.id)

## ADD LINE ITEMS

puts "Add line items"

budget.line_items.create!({
  budget_id: budget.id,
  name: "Rent",
  amount: 1500.00,
  user_id: user1.id,
  paid: false
})

budget.line_items.create!({
  budget_id: budget.id,
  name: "Internet",
  amount: 100.00,
  user_id: user2.id,
  paid: false
})

budget.line_items.create!({
  budget_id: budget.id,
  name: "Hydro",
  amount: 100.00,
  user_id: user3.id,
  paid: false
})

puts "DONE SEEDING!"
