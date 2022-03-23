# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_23_201709) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classrooms", force: :cascade do |t|
    t.string "classroom_name"
    t.bigint "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_classrooms_on_teacher_id"
  end

  create_table "masteries", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "problem_id", null: false
    t.integer "mastery_level"
    t.integer "times_answered"
    t.integer "times_correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["problem_id"], name: "index_masteries_on_problem_id"
    t.index ["student_id"], name: "index_masteries_on_student_id"
  end

  create_table "problems", force: :cascade do |t|
    t.string "multiplication_fact"
    t.integer "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "fact_number"
  end

  create_table "students", force: :cascade do |t|
    t.bigint "classroom_id", null: false
    t.string "username"
    t.string "password_digest"
    t.boolean "extra_time_needed"
    t.integer "extra_time_amount"
    t.boolean "offer_support"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["classroom_id"], name: "index_students_on_classroom_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "classrooms", "teachers"
  add_foreign_key "masteries", "problems"
  add_foreign_key "masteries", "students"
  add_foreign_key "students", "classrooms"
end
