class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string      :activity_tag
      t.integer     :user_id
      t.timestamp   :start_time
      t.timestamp   :end_time
      t.string      :title
      t.text        :memo
      t.timestamps
    end
  end
end
