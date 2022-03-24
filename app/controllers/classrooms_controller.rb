class ClassroomsController < ApplicationController

  def show
    teacher = Teacher.find_by(id: session[:user_id])
    if teacher
      classroom = Classroom.find_by(id: params[:id])
      render json: classroom, include: ['students.masteries', 'students.masteries.problem'], status: :ok
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  def create
    teacher = Teacher.find_by(id: session[:user_id])
    if teacher
      new_classroom = teacher.classrooms.create(classroom_params)
      new_classroom.save
      render json: new_classroom, status: :created  
    else
      render json: {error: "Invalid data"}, status: :unprocessable_entity
    end
  end

  def destroy
    classroom = Classroom.find_by(id: params[:id])
    if classroom
      classroom.destroy
      render json: {message: "Classroom and all its students removed."}
    else
      render json: {error: "Classroom not found"}, status: :not_found
    end
  end

  def classroom_params
    params.permit(:classroom_name, :teacher_id)
  end

end
