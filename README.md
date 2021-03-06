<img width="420" alt="Times Tables Master" src="https://user-images.githubusercontent.com/89664157/175067803-88285ac2-3209-4531-83f3-70734688cca6.png">

### React: front-end, Ruby on Rails: back-end 

[DEPLOYED SITE](https://times-tables-master.herokuapp.com/)

[VIDEO WALKTHROUGH](https://www.loom.com/share/098133a34fa04deebda97138ba99daab)

[BLOG: Building a Rails App to Track Student Progress](https://dev.to/alternate_robot/building-a-rails-api-to-track-student-progress-3a09)

## Overview

TIMES TABLE MASTER is an application created to help students master their multiplication facts, and to give teachers data that will allow them to focus their instruction to individual students based on their knowledge. 

Students can learn 8 rules to master their times tables, and then take quizzes on various times tables. Correct answers in the given time will increase the student's mastery level of a given fact, while an incorrect answer will move it down. Students can view a grid or graph that shows how well they know each of the 100 multiplication facts.

Teachers can set up various classrooms and create students within them. From their dashboard, teachers can keep track of which students need support, give students extra time to solve based on their needs, and view each student's progress.

<img width="798" alt="Screen Shot 2022-06-15 at 9 58 12 AM" src="https://user-images.githubusercontent.com/89664157/175072024-f3ccccae-b292-4750-8d2b-cadb342bb55e.png">

*Color-coded grid based upon student mastery level of each multiplication fact*

## Database Tables

The database consists of 6 related tables:
- teachers
- classrooms
- students
- problems
- masteries
- rules

### Teacher
- Has many classrooms

- Has many students through classrooms

### Classroom
- Belongs to teacher

- Has many students

### Student
- Belongs to classroom

- Belongs to teacher through classroom

- Has many masteries

- Has many problems through masteries

### Mastery
- Belongs to student

- Belongs to problem

### Problem
- Has many masteries

- Has many students through masteries

### Rule
- Not related to other tables

## Teacher

As a teacher, a user has access to a teacher dashboard, which tracks all students' demonstrated proficiency of multiplication facts. Teachers can create classroom and students in those classrooms.

<img width="1067" alt="Teacher View of Single Student" src="https://user-images.githubusercontent.com/89664157/175073660-55f99d32-4e94-4a36-8275-1d17ad9d7932.png">


## Classrooms

Each student belongs to a classroom, and the teacher of that classroom can access all data of students in that classroom. Students who sign up without a teacher will be placed in the default classroom.

<img width="1067" alt="Teacher Dashboard" src="https://user-images.githubusercontent.com/89664157/175070921-3b5f2cf9-67b8-41f8-b43d-5169cf6ebbbe.png">

### Student

Anyone who visits the site can explore the 8 rules of multiplication and a blank multiplication grid. A user who logs in with a student account can also take multiplication quizzes, and view the results of their accumulated data organized in their dashboard, or through a colored grid.

<img width="1067" alt="Student Dashboard" src="https://user-images.githubusercontent.com/89664157/175071627-d3233877-be07-4ba8-8600-ec9645d92942.png">

### Problem

A database of the 100 multiplication facts using the number 1 through 10. Contain the fact ("8 x 4"), and answer (32) 

### Mastery

Each student has a mastery for each of the 100 problems. The number of times a multiplication fact is answered, the number of times answered correctly, and the overall mastery level score is updated as a student takes quizzes.

<img width="999" alt="Student Quiz" src="https://user-images.githubusercontent.com/89664157/175072569-a66a8244-c9da-4bfb-bd3d-3626a1bfa549.png">

*Timed quiz for students which updates their mastery level. Teachers can adjust time given to solve for each student.*

### Rule

Rules for teaching the times tables, along with various related information, such as the number of facts related to the rules, and a photo of each of the facts highlighted on a grid.

<img width="350" alt="Odd Times Odd Grid" src="https://user-images.githubusercontent.com/89664157/175069480-4b709f2d-94ed-49de-a1bd-1f86bb462877.png">

*Grid showing multiplication facts including odd number times odd number*


