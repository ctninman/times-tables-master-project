class MasteriesController < ApplicationController

  def index
    render json: Mastery.all
  end

  def update
    mastery = Mastery.find_by(id: params[:id])
    if mastery
      mastery.update(mastery_params)
      render json: mastery, status: :ok
    else
      render json: {error: "Spice not found"}, status: :not_found
    end
  end

  private 

  def mastery_params
    params.permit(:mastery_level, :times_answered, :times_correct, :id)
  end

end
