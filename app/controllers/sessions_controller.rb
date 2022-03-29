class SessionsController < ApplicationController

  def create
    user = Student.find_by(username: params[:username])
    if user&.authenticate(params[:password])
       session[:student_id] = user.id
       session.delete :teacher_id
       render json: user, status: :created
    else
       render json:{ error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def create_teacher
    user = Teacher.find_by(username: params[:username])
    if user&.authenticate(params[:password])
       session[:teacher_id] = user.id
       session.delete :student_id
       render json: user, status: :created
    else
       render json:{ error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    if session.key?("student_id")
      student = Student.find_by(id: session[:student_id])
      if student
        session.delete :student_id
        head :no_content
      else
        render json: { error: "student not logged in" }, status: :unauthorized
      end
    elsif session.key?("teacher_id")
      teacher = Teacher.find_by(id: session[:teacher_id])
      if teacher
        session.delete :teacher_id
        head :no_content
      else
        render json: { error: "teacher not logged in" }, status: :unauthorized
      end
    end
  end

end
