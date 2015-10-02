class HomeController < ApplicationController
  def index
  end

  def search
    p "PARAM IS #{params}"
    @search_input = params[:srch_term]
    @search_result = (1..113).to_a
    render :index
  end
end
