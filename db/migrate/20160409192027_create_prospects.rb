class CreateProspects < ActiveRecord::Migration
  def change
    create_table :prospects do |t|
      t.string :email
      t.string :fname
      t.string :lname

      t.timestamps null: false
    end
  end
end
