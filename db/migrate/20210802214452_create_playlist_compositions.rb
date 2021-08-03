class CreatePlaylistCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_compositions do |t|
      t.belongs_to :playlist, null: false, foreign_key: true
      t.belongs_to :composition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
