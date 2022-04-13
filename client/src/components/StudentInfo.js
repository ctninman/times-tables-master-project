
function StudentInfo ({student, setSingleStudent, setViewSingleStudent, viewSingleStudent}) {

  let studentMasteredFacts = student.masteries.filter( (mastery) => mastery.mastery_level === 10)
  let studentAlmostMasteredFacts = student.masteries.filter((mastery) => mastery.mastery_level <= 9 && mastery.mastery_level >=7 )
  let studentStillLearningFacts = student.masteries.filter((mastery) => mastery.mastery_level <= 6 && mastery.mastery_level >=3)
  let studentStrugglingFacts = student.masteries.filter((mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)
  let studentUnknownFacts = student.masteries.filter((mastery) => mastery.mastery_level <= 2)

  function handleViewStudent () {
    setSingleStudent(student)
    setViewSingleStudent(!viewSingleStudent)
  }

  return (
    <div className='student-on-teacher-dash' style={{border: '2px solid'}} >
      <h2 style={{textAlign: 'center', textDecoration: 'underline'}}
        className={student.offer_support === false 
          ? 
            'support-not-needed' 
          :
            'support-needed'
        }>{student.username}</h2>
      <h3 className='dash-info' style={{textAlign:'center'}}> <i>Mastery:</i> {student.mastery_percentage}%</h3>
      <h3 style={{textAlign: 'center', textDecoration: 'underline'}}>NUMBER OF FACTS:</h3>
      <h3 className='dash-info'> <i>-Struggling:</i>  {studentStrugglingFacts.length}</h3>
      <h3 className='dash-info'> <i>-Mastered:</i>  {studentMasteredFacts.length}</h3>
      <h3 className='dash-info'> <i>-Almost Mastered:</i>  {studentAlmostMasteredFacts.length}</h3>
      <h3 className='dash-info'> <i>-Learning:</i>  {studentStillLearningFacts.length}</h3>
      <h3 style={{marginBottom: '15px'}} className='dash-info'> <i>-Unknown:</i>  {studentUnknownFacts.length}</h3>
      <button style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}onClick={handleViewStudent}>VIEW STUDENT</button>
    </div>
  )
}

export default StudentInfo