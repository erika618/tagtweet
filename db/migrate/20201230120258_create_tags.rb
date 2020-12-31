class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      # タグの重複を防ぐため
      t.string :name, null:false, uniqueness: true
      t.timestamps
    end
  end
end
