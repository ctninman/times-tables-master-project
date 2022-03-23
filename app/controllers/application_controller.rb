class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] ||= 0
    session[:count] += 1
    render json: { count: session[:count] }
  end
end
