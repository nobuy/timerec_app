class TopController < ApplicationController
  def index
    @activity   = Activity.new
    @activities = Activity.all
  end
end
