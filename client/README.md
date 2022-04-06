# TIMES TABLES MASTER

### Ruby on Rails - backend 

### React - frontend

## Overview

TIMES TABLE MASTER is an application created to help students master their multiplication facts, and to give teachers data that will allow them to focus their instruction to individual students based on their knowledge. 

Students can learn 8 rules to master their times tables, and then take quizzes on various times tables. Correct answers in the given time will increase the student's mastery level of a given fact, while an incorrect answer will move it down. Students can view a grid or graph that shows how well they know each of the 100 multiplication facts.

Teachers can set up various classrooms and create students within them. From their dashboard, teachers can keep track of which students need support, give students extra time to solve based on their needs, and view each student's progress.

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

- As a teacher, a user has access to a teacher dashboard, which tracks all students' demonstrated proficiency of multiplication facts. Teachers can create classroom and students in those classrooms.

## Classrooms

- Each student belongs to a classroom, and the teacher of that classroom can access all data of students in that classroom. Students who sign up without a teacher will be placed in the default classroom.

### Student

- Anyone who visits the site can explore the 8 rules of multiplication and a blank multiplication grid. A user who logs in with a student account can also take multiplication quizzes, and view the results of their accumulated data organized in their dashboard, or through a colored grid.

### Problem

- A database of the 100 multiplication facts using the number 1 through 10. Contain the fact ("8 x 4"), and answer (32) 

### Mastery

- Each student has a mastery for each of the 100 problems. The number of times a multiplication fact is answered, the number of times answered correctly, and the overall mastery level score is updated as a student takes quizzes.

### Rule

- Rules for teaching the times tables, along with various related information, such as the number of facts related to the rules, and a photo of each of the facts highlighted on a grid.



  