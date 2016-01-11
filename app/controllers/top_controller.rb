class TopController < ApplicationController
  def index
    @activity   = Activity.new
    @activities = Activity.order('id DESC')
  end
end
