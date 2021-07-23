class CreateCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :compositions do |t|
      t.string :name
      t.string :genre
      t.string :composer
      t.integer :year_composed
      t.integer :year_performed
      t.belongs_to :composer, null: false, foreign_key: true
      t.string :spotify_id

      t.timestamps
    end
  end
end
