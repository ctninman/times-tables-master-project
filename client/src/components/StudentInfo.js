function StudentInfo ({student, setSingleStudent, setViewSingleStudent, viewSingleStudent}) {

  let studentMasteredFacts = student.masteries.filter( (mastery) => mastery.mastery_level === 10)
  let studentAlmostMasteredFacts = student.masteries.filter((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 )
  let studentStillLearningFacts = student.masteries.filter((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=3)
  let studentStrugglingFacts = student.masteries.filter((mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)
  let studentUnknownFacts = student.masteries.filter((mastery) => mastery.mastery_level < 3)
  let studentFacts = student.masteries.filter( (mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)
  
  function handleViewStudent () {
    setSingleStudent(student)
    setViewSingleStudent(!viewSingleStudent)
  }
  //   setUserAlmostMasteredFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ))
  //   setUserLearningFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ))((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4))
  //   setUserUnknownFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 3))

  return (
    <div style={{margin: '5px', backgroundColor: 'lightgreen'}}>
      <h2>{student.username}</h2>
      <h3> Mastery: {student.mastery_percentage}%</h3>
      <h3> #Struggling: {studentStrugglingFacts.length}</h3>
      <h3> #Mastered: {studentMasteredFacts.length}</h3>
      <h3> #Almost Mastered: {studentAlmostMasteredFacts.length}</h3>
      <h3> #Learning : {studentStillLearningFacts.length}</h3>
      <h3> #Unknown: {studentUnknownFacts.length}</h3>
      <button onClick={handleViewStudent}>View Student</button>
    </div>
  )
}

export default StudentInfo