class RulesController < ApplicationController

  def index
    render json: Rule.all
  end

end
