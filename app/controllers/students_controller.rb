class StudentsController < ApplicationController

  wrap_parameters format: []

  before_action :authorize, only: :show

  def show
    if session[:student_id]
      student = Student.find_by(id: session[:student_id])
      if student
        render json: student, status: :ok
      else
        render json: {errors: student.errors.full_messages}, status: :unauthorized
      end
    elsif session[:teacher_id]
      teacher = Teacher.find_by(id: session[:teacher_id])
      if teacher
        render json: teacher, status: :ok
      else
        render json: {errors: teacher.errors.full_messages}, status: :unauthorized
      end
    else
      render json: {errors: "You are not authorized"}, status: :unauthorized
    end

  end

  def create
    student_classroom = Classroom.find_by(id: params[:classroom_id])
    new_student = student_classroom.students.create(student_params)
    if new_student.valid?
      new_student.save
      session.delete :teacher_id
      session[:student_id] = new_student.id
      render json: new_student, status: :created  
    else
      render json: {errors: new_student.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def create_by_teacher
    student_classroom = Classroom.find_by(id: params[:classroom_id])
    new_student = student_classroom.students.create(student_params)
    if new_student.valid?
      new_student.save
      render json: new_student, status: :created  
    else
      render json: {errors: new_student.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def update
    student = Student.find_by(id: params[:id])
    if student
      student.update(student_params)
      render json: student, status: :ok
    else
      render json: {errors: student.errors}, status: :not_found
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

  def most_difficult
    student = Student.find_by(id: params[:id])
    if student
      render json: student.most_difficult_facts, status: :ok
    end
  end

  # def update
  #   student = Student.find_by(id: params[:id])
  #   students_classroom = Classroom.find_by(id: student.classroom_id)
  #   students_teacher = Teacher.find_by(id: students_classroom.teacher_id)
  #   teacher = Teacher.find_by(id: session[:teacher_id])
    
  #   if student && students_teacher == session[:teacher_id]
  #     byebug
  #     student.update(student_params)
  #     render json: student, status: :ok
  #   elsif student
  #     render json: {error: "You are not authorized to update this student"}, status: :unauthorized
  #   else
  #     render json: {error: "Student not found"}, status: :not_found
  #   end
  # end

  private

  def authorize
    if session.include? :student_id
      return
    elsif session.include? :teacher_id
      return
    else
      return render json: {error: ['You are not authorized. Check to see if you are logged in.']}, status: :unauthorized
    end
  end

  def student_params
    params.permit(:username, :is_teacher, :time_to_solve, :offer_support, :classroom_id, :password, :id, :password_confirmation)
  end

end
