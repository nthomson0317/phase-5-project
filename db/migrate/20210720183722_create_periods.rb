class CreatePeriods < ActiveRecord::Migration[6.1]
  def change
    create_table :periods do |t|
      t.string :name
      t.string :era
      t.string :image_src

      t.timestamps
    end
  end
end
