# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Budget.destroy_all
BudgetMember.destroy_all
LineItem.destroy_all

puts "Seeding db data"

## BUDGET

puts "Seeding budget"

budget = Budget.create(name: '24 Sussex Drive', total: 0.00, url: "https://postmediaottawacitizen2.files.wordpress.com/2015/09/undated-undated-handout-photo-of-exterior-of-24-sussex-dr.jpeg")

budget2 = Budget.create(name: 'Vacation', total: 0.00, url: "https://www.tourismpei.com/sites/default/files/homepage-cta/aboutpei_homepage_cta.jpg")

## USERS

puts "Seeding users"

user1 = budget.users.create_with({last: 'Mastrantoni', email: 'andrea@email.com'}).find_or_create_by! first: 'Andrea'
user2 = budget.users.create_with({last: 'Chvojka', email: 'karl@email.com'}).find_or_create_by! first: 'Karl'
user3 = budget.users.create_with({last: 'Yeung', email: 'eden@email.com'}).find_or_create_by! first: 'Eden'

user4 = budget2.users.create_with({last: 'Mackey', email: 'britney@email.com'}).find_or_create_by! first: 'Britney'


## BUDGET_MEMBERS

puts "Add budget members"

BudgetMember.find_or_create_by!(user_id: user1.id, budget_id: budget2.id)
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

budget.line_items.create!({
  budget_id: budget.id,
  name: "Cups",
  amount: 15.00,
  user_id: user1.id,
  paid: true
})

budget.line_items.create!({
  budget_id: budget.id,
  name: "BEEER",
  amount: 60,
  user_id: user2.id,
  paid: true
})

budget.line_items.create!({
  budget_id: budget.id,
  name: "Pizza",
  amount: 24,
  user_id: user3.id,
  paid: true
})
#------Budget 2 -----------
budget2.line_items.create!({
  budget_id: budget.id,
  name: "Rent",
  amount: 1500.00,
  user_id: user1.id,
  paid: false
})

budget2.line_items.create!({
  budget_id: budget.id,
  name: "Internet",
  amount: 100.00,
  user_id: user4.id,
  paid: false
})

budget2.line_items.create!({
  budget_id: budget.id,
  name: "Hydro",
  amount: 100.00,
  user_id: user1.id,
  paid: false
})

puts "DONE SEEDING!"
