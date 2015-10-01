class HomeController < ApplicationController
  def index
  end

  def search
    p "PARAM IS #{params}"
    @search_input = params[:srch_term]
    render :index
  end
end
