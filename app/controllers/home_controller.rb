class HomeController < ApplicationController
  def index
  end

  def search
    p "PARAM IS #{params}"
  end
end
