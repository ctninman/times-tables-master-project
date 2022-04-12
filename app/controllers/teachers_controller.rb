class TeachersController < ApplicationController

  wrap_parameters format: []

  before_action :authorize, only: :show

  def show
    teacher = Teacher.find_by(id: session[:teacher_id])
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
      session.delete :student_id
      session[:teacher_id] = new_teacher.id
      render json: new_teacher, status: :created  
    else
      render json: {errors: new_teacher.errors.full_messages}, status: :unprocessable_entity
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

  def authorize
    return render json: {error: ['You are not authorized. Check to see if you are logged in.']}, status: :unauthorized unless session.include? :teacher_id || :student_id
  end


  def teacher_params
    params.permit(:username, :password, :email, :is_teacher, :password, :password_confirmation)
  end
  
end
