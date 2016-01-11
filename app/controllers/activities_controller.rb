class ActivitiesController < ApplicationController
  def create
    @activity = Activity.create(create_params)
    redirect_to :root
  end

  private
  def create_params
    params.require(:activity).permit(:activity_tag, :start_time, :end_time, :title, :memo)
  end
end
