# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190531215923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget_members", force: :cascade do |t|
    t.integer  "budget_id"
    t.integer  "user_id"
    t.boolean  "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "budget_members", ["budget_id"], name: "index_budget_members_on_budget_id", using: :btree
  add_index "budget_members", ["user_id"], name: "index_budget_members_on_user_id", using: :btree

  create_table "budgets", force: :cascade do |t|
    t.string   "name"
    t.float    "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "url"
  end

  create_table "line_items", force: :cascade do |t|
    t.integer  "budget_id"
    t.string   "name"
    t.float    "amount"
    t.integer  "user_id"
    t.boolean  "paid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "line_items", ["budget_id"], name: "index_line_items_on_budget_id", using: :btree
  add_index "line_items", ["user_id"], name: "index_line_items_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first"
    t.string   "last"
    t.string   "email"
    t.string   "password_digest"
    t.string   "phone"
    t.string   "photo"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "budget_members", "budgets"
  add_foreign_key "budget_members", "users"
  add_foreign_key "line_items", "budgets"
  add_foreign_key "line_items", "users"
end
