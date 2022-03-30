no_teacher = Teacher.create(username: "No Teacher", password: 'password', email: "no_teacher@no_teacher.com", is_teacher: true)
mrs_cuff = Teacher.create(username: "Mrs. Cuff", password: 'password', email: "mrs_cuff@mrs_cuff.com", is_teacher: true)
mr_klatt = Teacher.create(username: "Mr. Klatt", password: 'password', email: "mr_klatt@mr_klatt.com", is_teacher: true) 
mr_retzlaff = Teacher.create(username: "Mr. Retzlaff", password: 'password', email: "mr_retzlaff@mr_retzlaff.com", is_teacher: true)

no_classroom = Classroom.new(classroom_name: "No Classroom")
third_grade = Classroom.new(classroom_name: "3rd Grade")
fourth_grade = Classroom.new(classroom_name: "4th Grade")
fifth_grade = Classroom.new(classroom_name: "5th Grade")
sixth_grade = Classroom.new(classroom_name: "6th Grade")
seventh_grade = Classroom.new(classroom_name: "7th Grade")
eighth_grade = Classroom.new(classroom_name: "8th Grade")

no_classroom.teacher = no_teacher
third_grade.teacher = mrs_cuff
fourth_grade.teacher = mrs_cuff
fifth_grade.teacher = mr_klatt
sixth_grade.teacher = mr_klatt
seventh_grade.teacher = mr_retzlaff
eighth_grade.teacher = mr_retzlaff

no_classroom.save
third_grade.save
fourth_grade.save
fifth_grade.save
sixth_grade.save
seventh_grade.save
eighth_grade.save

boz = Student.new(username: 'Boz Leyrer', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
griffith = Student.new(username: 'Griffey Sellnow', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
abbie = Student.new(username: 'Abbie Leyrer', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
kippy = Student.new(username: 'Kippy Ninman', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
seth = Student.new(username: 'Sethaoy Pardee', password: 'password', time_to_solve: 7, offer_support: true, is_teacher: false)
dara = Student.new(username: 'Dara Parrish', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
grant = Student.new(username: 'Grant Stafford', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
cassie =Student.new(username: 'Cassandra Ibeling', password: 'password', time_to_solve: 7, offer_support: true, is_teacher: false)
jamie = Student.new(username: 'Jamie Anderson', password: 'password', time_to_solve: 7, offer_support: true, is_teacher: false)
darby = Student.new(username: 'Darby Parrish', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)
matteo = Student.new(username: 'Matteo', password: 'password', time_to_solve: 7, offer_support: false, is_teacher: false)

boz.classroom = fourth_grade
griffith.classroom = third_grade
abbie.classroom = sixth_grade
kippy.classroom = sixth_grade
seth.classroom = fifth_grade
dara.classroom = seventh_grade
grant.classroom = fourth_grade
cassie.classroom = eighth_grade
jamie.classroom = eighth_grade
darby.classroom = fourth_grade
matteo.classroom = no_classroom

boz.save
griffith.save
abbie.save
kippy.save
seth.save
dara.save
grant.save
cassie.save
jamie.save
darby.save
matteo.save



p1 = Problem.create(multiplication_fact: '1 x 1', answer: 1, fact_number: 1)
p2 = Problem.create(multiplication_fact: '1 x 2', answer: 2, fact_number: 2)
p3 = Problem.create(multiplication_fact: '1 x 3', answer: 3, fact_number: 3)
p4 = Problem.create(multiplication_fact: '1 x 4', answer: 4, fact_number: 4)
p5 = Problem.create(multiplication_fact: '1 x 5', answer: 5, fact_number: 5)
p6 = Problem.create(multiplication_fact: '1 x 6', answer: 6, fact_number: 6)
p7 = Problem.create(multiplication_fact: '1 x 7', answer: 7, fact_number: 7)
p8 = Problem.create(multiplication_fact: '1 x 8', answer: 8, fact_number: 8)
p9 = Problem.create(multiplication_fact: '1 x 9', answer: 9, fact_number: 9)
p10 = Problem.create(multiplication_fact: '1 x 10', answer: 10, fact_number: 10)

p11 = Problem.create(multiplication_fact: '2 x 1', answer: 2, fact_number: 11)
p12 = Problem.create(multiplication_fact: '2 x 2', answer: 4, fact_number: 12)
p13 = Problem.create(multiplication_fact: '2 x 3', answer: 6, fact_number: 13)
p14 = Problem.create(multiplication_fact: '2 x 4', answer: 8, fact_number: 14)
p15 = Problem.create(multiplication_fact: '2 x 5', answer: 10, fact_number: 15)
p16 = Problem.create(multiplication_fact: '2 x 6', answer: 12, fact_number: 16)
p17 = Problem.create(multiplication_fact: '2 x 7', answer: 14, fact_number: 17)
p18 = Problem.create(multiplication_fact: '2 x 8', answer: 16, fact_number: 18)
p19 = Problem.create(multiplication_fact: '2 x 9', answer: 18, fact_number: 19)
p20 = Problem.create(multiplication_fact: '2 x 10', answer: 20, fact_number: 20)

p21 = Problem.create(multiplication_fact: '3 x 1', answer: 3, fact_number: 21)
p22 = Problem.create(multiplication_fact: '3 x 2', answer: 6, fact_number: 22)
p23 = Problem.create(multiplication_fact: '3 x 3', answer: 9, fact_number: 23)
p24 = Problem.create(multiplication_fact: '3 x 4', answer: 12, fact_number: 24)
p25 = Problem.create(multiplication_fact: '3 x 5', answer: 15, fact_number: 25)
p26 = Problem.create(multiplication_fact: '3 x 6', answer: 18, fact_number: 26)
p27 = Problem.create(multiplication_fact: '3 x 7', answer: 21, fact_number: 27)
p28 = Problem.create(multiplication_fact: '3 x 8', answer: 24, fact_number: 28)
p29 = Problem.create(multiplication_fact: '3 x 9', answer: 27, fact_number: 29)
p30 = Problem.create(multiplication_fact: '3 x 10', answer: 30, fact_number: 30)

p31 = Problem.create(multiplication_fact: '4 x 1', answer: 4, fact_number: 31)
p32 = Problem.create(multiplication_fact: '4 x 2', answer: 8, fact_number: 32)
p33 = Problem.create(multiplication_fact: '4 x 3', answer: 12, fact_number: 33)
p34 = Problem.create(multiplication_fact: '4 x 4', answer: 16, fact_number: 34)
p35 = Problem.create(multiplication_fact: '4 x 5', answer: 20, fact_number: 35)
p36 = Problem.create(multiplication_fact: '4 x 6', answer: 24, fact_number: 36)
p37 = Problem.create(multiplication_fact: '4 x 7', answer: 28, fact_number: 37)
p38 = Problem.create(multiplication_fact: '4 x 8', answer: 32, fact_number: 38)
p39 = Problem.create(multiplication_fact: '4 x 9', answer: 36, fact_number: 39)
p40 = Problem.create(multiplication_fact: '4 x 10', answer: 40, fact_number: 40)

p41 = Problem.create(multiplication_fact: '5 x 1', answer: 5, fact_number: 41)
p42 = Problem.create(multiplication_fact: '5 x 2', answer: 10, fact_number: 42)
p43 = Problem.create(multiplication_fact: '5 x 3', answer: 15, fact_number: 43)
p44 = Problem.create(multiplication_fact: '5 x 4', answer: 20, fact_number: 44)
p45 = Problem.create(multiplication_fact: '5 x 5', answer: 25, fact_number: 45)
p46 = Problem.create(multiplication_fact: '5 x 6', answer: 30, fact_number: 46)
p47 = Problem.create(multiplication_fact: '5 x 7', answer: 35, fact_number: 47)
p48 = Problem.create(multiplication_fact: '5 x 8', answer: 40, fact_number: 48)
p49 = Problem.create(multiplication_fact: '5 x 9', answer: 45, fact_number: 49)
p50 = Problem.create(multiplication_fact: '5 x 10', answer: 50, fact_number: 50)

p51 = Problem.create(multiplication_fact: '6 x 1', answer: 6, fact_number: 51)
p52 = Problem.create(multiplication_fact: '6 x 2', answer: 12, fact_number: 52)
p53 = Problem.create(multiplication_fact: '6 x 3', answer: 18, fact_number: 53)
p54 = Problem.create(multiplication_fact: '6 x 4', answer: 24, fact_number: 54)
p55 = Problem.create(multiplication_fact: '6 x 5', answer: 30, fact_number: 55)
p56 = Problem.create(multiplication_fact: '6 x 6', answer: 36, fact_number: 56)
p57 = Problem.create(multiplication_fact: '6 x 7', answer: 42, fact_number: 57)
p58 = Problem.create(multiplication_fact: '6 x 8', answer: 48, fact_number: 58)
p59 = Problem.create(multiplication_fact: '6 x 9', answer: 54, fact_number: 59)
p60 = Problem.create(multiplication_fact: '6 x 10', answer: 60, fact_number: 60)

p61 = Problem.create(multiplication_fact: '7 x 1', answer: 7, fact_number: 61)
p62 = Problem.create(multiplication_fact: '7 x 2', answer: 14, fact_number: 62)
p63 = Problem.create(multiplication_fact: '7 x 3', answer: 21, fact_number: 63)
p64 = Problem.create(multiplication_fact: '7 x 4', answer: 28, fact_number: 64)
p65 = Problem.create(multiplication_fact: '7 x 5', answer: 35, fact_number: 65)
p66 = Problem.create(multiplication_fact: '7 x 6', answer: 42, fact_number: 66)
p67 = Problem.create(multiplication_fact: '7 x 7', answer: 49, fact_number: 67)
p68 = Problem.create(multiplication_fact: '7 x 8', answer: 56, fact_number: 68)
p69 = Problem.create(multiplication_fact: '7 x 9', answer: 63, fact_number: 69)
p70 = Problem.create(multiplication_fact: '7 x 10', answer: 70, fact_number: 70)

p71 = Problem.create(multiplication_fact: '8 x 1', answer: 8, fact_number: 71)
p72 = Problem.create(multiplication_fact: '8 x 2', answer: 16, fact_number: 72)
p73 = Problem.create(multiplication_fact: '8 x 3', answer: 24, fact_number: 73)
p74 = Problem.create(multiplication_fact: '8 x 4', answer: 32, fact_number: 74)
p75 = Problem.create(multiplication_fact: '8 x 5', answer: 40, fact_number: 75)
p76 = Problem.create(multiplication_fact: '8 x 6', answer: 48, fact_number: 76)
p77 = Problem.create(multiplication_fact: '8 x 7', answer: 56, fact_number: 77)
p78 = Problem.create(multiplication_fact: '8 x 8', answer: 64, fact_number: 78)
p79 = Problem.create(multiplication_fact: '8 x 9', answer: 72, fact_number: 79)
p80 = Problem.create(multiplication_fact: '8 x 10', answer: 80, fact_number: 80)

p81 = Problem.create(multiplication_fact: '9 x 1', answer: 9, fact_number: 81)
p82 = Problem.create(multiplication_fact: '9 x 2', answer: 18, fact_number: 82)
p83 = Problem.create(multiplication_fact: '9 x 3', answer: 27, fact_number: 83)
p84 = Problem.create(multiplication_fact: '9 x 4', answer: 36, fact_number: 84)
p85 = Problem.create(multiplication_fact: '9 x 5', answer: 45, fact_number: 85)
p86 = Problem.create(multiplication_fact: '9 x 6', answer: 54, fact_number: 86)
p87 = Problem.create(multiplication_fact: '9 x 7', answer: 63, fact_number: 87)
p88 = Problem.create(multiplication_fact: '9 x 8', answer: 72, fact_number: 88)
p89 = Problem.create(multiplication_fact: '9 x 9', answer: 81, fact_number: 89)
p90 = Problem.create(multiplication_fact: '9 x 10', answer: 90, fact_number: 90)

p91 = Problem.create(multiplication_fact: '10 x 1', answer: 10, fact_number: 91)
p92 = Problem.create(multiplication_fact: '10 x 2', answer: 20, fact_number: 92)
p93 = Problem.create(multiplication_fact: '10 x 3', answer: 30, fact_number: 93)
p94 = Problem.create(multiplication_fact: '10 x 4', answer: 40, fact_number: 94)
p95 = Problem.create(multiplication_fact: '10 x 5', answer: 50, fact_number: 95)
p96 = Problem.create(multiplication_fact: '10 x 6', answer: 60, fact_number: 96)
p97 = Problem.create(multiplication_fact: '10 x 7', answer: 70, fact_number: 97)
p98 = Problem.create(multiplication_fact: '10 x 8', answer: 80, fact_number: 98)
p99 = Problem.create(multiplication_fact: '10 x 9', answer: 90, fact_number: 99)
p100 = Problem.create(multiplication_fact: '10 x 10', answer: 100, fact_number: 100)

def create_masteries(one_student)
  n = 1
  while n <= 100
    one_student.masteries.create(mastery_level: rand(0...11), times_answered: rand(6...11), times_correct: rand(0...6), problem_id: n)
    n += 1
  end
end

create_masteries(boz)
create_masteries(griffith)
create_masteries(abbie)
create_masteries(kippy)
create_masteries(seth)
create_masteries(dara)
create_masteries(cassie)
create_masteries(jamie)
create_masteries(darby)
create_masteries(grant)
create_masteries(matteo)


rule_0 = Rule.create(rule: "Learn the following multiplication rules to master all your multiplication facts.", explanation: ["Using the numbers 1 through 10, there are 100 multiplication facts in total. But you don't need to memorize 100 facts!", "Each rule will help you learn a large number of facts using much less effort!"], related_facts: 100, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%2011.26.09%20PM.png", additional_explanation: ["Learn the rules one by one, and you can quickly become a Times Tables Master!"], rule_number: 0, rule_title: "Rules Home")

rule_1 = Rule.create(rule: "The 1st number multiplied by the 2nd number is equal to the 2nd number multiplied by the 1st number", explanation: ["6 x 7 = 42    and    7 x 6 = 42     So,   6 x 7 = 7 x 6", "3 x 9 = 27   and   9 x 3 = 27     So,   3 x 9 = 9 x 3"], related_facts: 45, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.43.47%20PM.png", additional_explanation: ["Just remember that 7 x 6 (seven groups of 6) is not the same as 6 x 7 (six groups of seven), but they do equal the same number", "If you remember this rule, you have already taken away almost half of the times tables facts."], rule_number: 1, rule_title: "Rule #1")

rule_2 = Rule.create(rule: "Any number multiplied by 1 is equal to itself.", explanation: ["Multiply a number times times one and it will equal that number.", "6 x 1 = 6", "9 x 1 = 9"], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.44.46%20PM.png", additional_explanation: ["Combine this with Rule #1. One multiplied by any number is that number.     1 x 4 = 4     1 x 78 = 78", "This rule is always true.     54,765 x 1 = 54,765"], rule_number: 2, rule_title: "Rule #2")

rule_3 = Rule.create(rule: "When you multiply a number times 10, attach a zero.", explanation: ["2 x 10 is the same as saying '2 tens', or 20", "9 x 10 = 90"], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.46.27%20PM.png", additional_explanation: ["Combine this with Rule #1.     10 x 6 = 60.", "This rule is always true.     54,765 x 10 = 547,650"], rule_number: 3, rule_title: "Rule #3")

rule_4 = Rule.create(rule: "To multiply any number times 2, double that number.", explanation: ["5 x 2 = 5 + 5   which equals 10", "9 x 2 = 9 + 9   which = 18"], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.45.32%20PM.png", additional_explanation: ["Combine this with Rule #1. 2 x 8 is equal to eight doubled.", "This rule is always true.     400 x 2 = 800"], rule_number: 4, rule_title: "Rule #4")


rule_5 = Rule.create(rule: "Multiplying a number times 4 is the same as doubling that number twice.", explanation: ["6 x 4 = 6 + 6 + 6 + 6   which is the same as 12 + 12", "To multiply 8 x 4, first: double 8, which is 16. Then double 16, which is 32."], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.47.10%20PM.png", additional_explanation: ["Combine this with Rule #1.   4 x 6 = six doubled twice.", "NOTE: You may find it easier just to memorize the four times table."], rule_number: 5, rule_title: "Rule #5")


rule_6 = Rule.create(rule: "Multiplying times 5 is just like counting by 5's.   5, 10, 15, 20, 25, 30 ...", explanation: ["5 x 1 = 5     5 x 2 = 10     5 x 3 = 15", "When you multiply times 5, your product will always end with a '0' or a '5'"], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.47.52%20PM.png", additional_explanation: ["An even number times 5 ends in 0. An odd number times 5 ends in 5"], rule_number: 6, rule_title: "Rule #6")

rule_7 = Rule.create(rule: "When multiplying times 9, the tens digit plus the ones digit equals 9, and the tens digit will be one less than the number you multiply by.", explanation: ["5 x 9 = 45     Add the tens digit and the ones digit,   4 + 5 = 9", "7 x 9 = 63     Add the tens digit and the ones digit,   6 + 3 = 9"], related_facts: 19, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.48.42%20PM.png", additional_explanation: ["Another way to memorize your 9 times table is to multiply the number times 10, and then subtract the number. 8 x 10 = 80, so   8 x 9   equals   80 - 8 , or 72 ", "4 x 10 = 40 , so   4 x 9   equals   40 - 4 , or 36"], rule_number: 7, rule_title: "Rule #7")


rule_8 = Rule.create(rule: "Memorize the remaining 10 facts.", explanation: ["If you have the other 7 rules learned, you are left with only 10 remaining multiplication facts.", "There is no simple rule to cover these facts, so you just need to memorize them. But it is only ten facts, rather than the 100 facts we started with!"], related_facts: 10, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%203.50.14%20PM.png", additional_explanation: ["Never forget the first rule: The 1st number multiplied by the 2nd number is equal to the 2nd number multiplied by the 1st number."], rule_number: 8, rule_title: "Rule #8")

rule_9 = Rule.create(rule: "The only time you will get an odd number for a product by multiplying two numbers is when you multiply an odd number times an odd number.", explanation: ["An even number multiplied by an even number equals an even number.     6 x 8 = 48", "An even number multiplied by an odd number equals an even number.     7 x 4 = 28", "An odd number multiplied by an odd number equals an odd number.     5 x 9 = 45"], related_facts: 25, grid_photo: "https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%2010.16.59%20PM.png", additional_explanation: ["Never forget the first rule: The 1st number multiplied by the 2nd number is equal to the 2nd number multiplied by the 1st number."], rule_number: 9, rule_title: "Extra help")
