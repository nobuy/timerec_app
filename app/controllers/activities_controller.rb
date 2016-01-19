class ActivitiesController < ApplicationController
  def index
    @activity   = Activity.new
    @activities = Activity.order('id DESC')
  end
  def create
    @activity = Activity.create(create_params)
    @activities = Activity.order('id DESC')
  end

  private
  def create_params
    params.require(:activity).permit(:activity_tag, :start_time, :end_time, :title, :memo)
  end
end
