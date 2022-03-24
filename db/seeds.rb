mrs_cuff = Teacher.create(username: "Mrs. Cuff", password: 'password',)
mr_klatt = Teacher.create(username: "Mr. Klatt", password: 'password',) 
mr_retzlaff = Teacher.create(username: "Mrs. Retzlaff", password: 'password',)

third_grade = Classroom.new(classroom_name: "3rd Grade")
fourth_grade = Classroom.new(classroom_name: "4th Grade")
fifth_grade = Classroom.new(classroom_name: "5th Grade")
sixth_grade = Classroom.new(classroom_name: "6th Grade")
seventh_grade = Classroom.new(classroom_name: "7th Grade")
eighth_grade = Classroom.new(classroom_name: "8th Grade")

third_grade.teacher = mrs_cuff
fourth_grade.teacher = mrs_cuff
fifth_grade.teacher = mr_klatt
sixth_grade.teacher = mr_klatt
seventh_grade.teacher = mr_retzlaff
eighth_grade.teacher = mr_retzlaff

third_grade.save
fourth_grade.save
fifth_grade.save
sixth_grade.save
seventh_grade.save
eighth_grade.save

boz = Student.new(username: 'Boz Leyrer', password: 'password', extra_time_needed: true, extra_time_amount: 5, offer_support: false)
griffith = Student.new(username: 'Griffey Sellnow', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: false)
abbie = Student.new(username: 'Abbie Leyrer', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: false)
kippy = Student.new(username: 'Kippy Ninman', password: 'password', extra_time_needed: true, extra_time_amount: 3, offer_support: false)
seth = Student.new(username: 'Sethaoy Pardee', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: true)
dara = Student.new(username: 'Dara Parrish', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: false)
grant = Student.new(username: 'Grant Stafford', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: false)
cassie =Student.new(username: 'Cassandra Ibeling', password: 'password', extra_time_needed: true, extra_time_amount: 4, offer_support: true)
jamie = Student.new(username: 'Jamie Anderson', password: 'password', extra_time_needed: true, extra_time_amount: 7, offer_support: true)
darby =Student.new(username: 'Darby Parrish', password: 'password', extra_time_needed: false, extra_time_amount: 0, offer_support: false)

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
