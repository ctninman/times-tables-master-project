class StudentsController < ApplicationController

  def show
    student = Student.find_by(id: session[:user_id])
    if student
      render json: student, status: :ok
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

end
