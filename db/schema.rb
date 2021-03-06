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

ActiveRecord::Schema.define(version: 2021_08_02_214452) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "composers", force: :cascade do |t|
    t.string "name"
    t.string "birth"
    t.string "death"
    t.string "portrait"
    t.bigint "period_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["period_id"], name: "index_composers_on_period_id"
  end

  create_table "compositions", force: :cascade do |t|
    t.string "name"
    t.string "genre"
    t.string "composer"
    t.integer "year_composed"
    t.integer "year_performed"
    t.bigint "composer_id", null: false
    t.string "spotify_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["composer_id"], name: "index_compositions_on_composer_id"
  end

  create_table "periods", force: :cascade do |t|
    t.string "name"
    t.string "era"
    t.string "image_src"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "playlist_compositions", force: :cascade do |t|
    t.bigint "playlist_id", null: false
    t.bigint "composition_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["composition_id"], name: "index_playlist_compositions_on_composition_id"
    t.index ["playlist_id"], name: "index_playlist_compositions_on_playlist_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "composers", "periods"
  add_foreign_key "compositions", "composers"
  add_foreign_key "playlist_compositions", "compositions"
  add_foreign_key "playlist_compositions", "playlists"
  add_foreign_key "playlists", "users"
end
