class TeachersController < ApplicationController

  wrap_parameters format: []

  def show
    teacher = Teacher.find_by(id: session[:user_id])
    if teacher
      render json: teacher, status: :ok
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  def create
    new_teacher = Teacher.new(teacher_params)
    if new_teacher.valid?
      new_teacher.save
      render json: new_teacher, status: :created  
    else
      render json: {error: "Invalid data"}, status: :unprocessable_entity
    end

  end

  def destroy
    teacher = Teacher.find_by(id: params[:id])
    if teacher
      teacher.destroy
      render json: {message: "Teacher and their students removed"}
    else
      render json: {error: "Teacher not found"}, status: :not_found
    end
  end

  private

  def teacher_params
    params.permit(:username, :password)
  end
  
end
