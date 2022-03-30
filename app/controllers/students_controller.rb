class StudentsController < ApplicationController

  wrap_parameters format: []

  def show
    if session[:student_id]
      student = Student.find_by(id: session[:student_id])
      if student
        render json: student, include: ['masteries', 'masteries.problem'], status: :ok
      else
        render json: {error: "Not authorized"}, status: :unauthorized
      end
    elsif session[:teacher_id]
      teacher = Teacher.find_by(id: session[:teacher_id])
      if teacher
        render json: teacher, status: :ok
      else
        render json: {error: "Not authorized"}, status: :unauthorized
      end
    end
  end

  def create
    student_classroom = Classroom.find_by(id: params[:classroom_id])
    new_student = student_classroom.students.create(student_params)
    if new_student.valid?
      new_student.save
      render json: new_student, status: :created  
    else
      render json: {error: "Invalid data"}, status: :unprocessable_entity
    end

  end

  def update
    student = Student.find_by(id: params[:id])
    if student
      student.update(student_params)
      render json: student, status: :ok
    else
      render json: {error: "Spice not found"}, status: :not_found
    end
  end

  def destroy
    student = Student.find_by(id: params[:id])
    if student
      student.destroy
      render json: {message: "Student and all their masteries removed."}
    else
      render json: {error: "Student not found"}, status: :not_found
    end
  end

  private

  def student_params
    params.permit(:username, :extra_time_needed, :extra_time_amount, :offer_support, :classroom_id, :password, :id)
  end

end
