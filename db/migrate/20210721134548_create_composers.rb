class CreateComposers < ActiveRecord::Migration[6.1]
  def change
    create_table :composers do |t|
      t.string :name
      t.string :birth
      t.string :death
      t.string :portrait
      t.belongs_to :period, null: false, foreign_key: true

      t.timestamps
    end
  end
end
