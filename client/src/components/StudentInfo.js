import {useState} from 'react'

function StudentInfo ({student, setSingleStudent, setViewSingleStudent, viewSingleStudent}) {

  let studentMasteredFacts = student.masteries.filter( (mastery) => mastery.mastery_level === 10)
  let studentAlmostMasteredFacts = student.masteries.filter((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 )
  let studentStillLearningFacts = student.masteries.filter((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=3)
  let studentStrugglingFacts = student.masteries.filter((mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)
  let studentUnknownFacts = student.masteries.filter((mastery) => mastery.mastery_level < 3)
  let studentFacts = student.masteries.filter( (mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)
  
  const [needsSupport, setNeedsSupport] = useState(student.offer_support)

  function handleViewStudent () {
    setSingleStudent(student)
    setViewSingleStudent(!viewSingleStudent)
  }
  //   setUserAlmostMasteredFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ))
  //   setUserLearningFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ))((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4))
  //   setUserUnknownFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 3))

  return (
    <div className='student-on-teacher-dash' style={{border: '2px solid'}} >
      <h2 style={{textAlign: 'center', textDecoration: 'underline'}}
        className={student.offer_support === false 
          ? 
            'support-not-needed' 
          :
            'support-needed'
        }>{student.username}</h2>
      <h3> <i>Mastery:</i> {student.mastery_percentage}%</h3>
      <h3> <i>#Struggling:</i>  {studentStrugglingFacts.length}</h3>
      <h3> <i>#Mastered:</i>  {studentMasteredFacts.length}</h3>
      <h3> <i>#Almost Mastered:</i>  {studentAlmostMasteredFacts.length}</h3>
      <h3> <i>#Learning:</i>  {studentStillLearningFacts.length}</h3>
      <h3> <i>#Unknown:</i>  {studentUnknownFacts.length}</h3>
      <button onClick={handleViewStudent}>VIEW STUDENT</button>
    </div>
  )
}

export default StudentInfo