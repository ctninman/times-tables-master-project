import {useState, useEffect, useRef, useContext} from 'react'
import {UserContext} from './UserContext'

function SingleStudentTeacherDash ({singleStudent, setViewSingleStudent, fetchClassroom, triggerClassroomFetch, setTriggerClassroomFetch}) {

  const sumAllResponses = singleStudent.masteries.map(item => item.times_answered).reduce((prev, curr) => prev + curr, 0);
  const sumAllCorrect = singleStudent.masteries.map(item => item.times_correct).reduce((prev, curr) => prev + curr, 0);
  const mastered = singleStudent.masteries.filter(item => item.mastery_level === 10)
  const almostMastered = singleStudent.masteries.filter(item => item.mastery_level > 7 && item.mastery_level < 10)
  const learning = singleStudent.masteries.filter(item => item.mastery_level >= 4 && item.mastery_level <=7 )
  const unknown = singleStudent.masteries.filter(item => item.mastery_level < 4)
  const struggle = singleStudent.masteries.filter((mastery) => mastery.times_answered > 8 && mastery.times_answered / mastery.times_correct > 2)

  const [studentTimeNeeded, setStudentTimeNeeded] = useState(singleStudent.time_to_solve)
  const [studentSupportNeeded, setStudentSupportNeeded] = useState(singleStudent.offer_support)

  const firstUpdate = useRef(true);

  const {allFacts} = useContext(UserContext)

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    patchUpdatedStudent({time_to_solve: studentTimeNeeded})
  }, [studentTimeNeeded])

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    patchUpdatedStudent({offer_support: studentSupportNeeded})
  }, [studentSupportNeeded])


  function handleDeleteStudent () {
    const shouldDeleteStudent = window.confirm("Are you sure you want to remove this student from your classroom?")
    if (shouldDeleteStudent) {
      let confirmShouldDeleteStudent = window.confirm("Just double checking")
      if (confirmShouldDeleteStudent) {
        fetch(`/students/${singleStudent.id}`, {method: "DELETE"})
        .then((r) => r.json())
        .then((data) => {
          setTriggerClassroomFetch(!triggerClassroomFetch)
          setViewSingleStudent(false)
        })
      }
    }
  }

  function handleMap (item) {
    const problem = allFacts.find((fact) => fact.id === item.problem_id)
    return <p key={problem.multiplication_fact} className='student-dash-fact' >{problem.multiplication_fact}</p>
  }

  function patchUpdatedStudent (object) {
    fetch(`/students/${singleStudent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json()
        // .then((user) => setUser(user));
        .then((data) => console.log(data))
      } else {
        r.json()
        // .then((err) => setErrors(err.errors));
        console.log("um, nope")
      }
    });
  }

  function handleViewClass () {
    setViewSingleStudent(false)
    fetchClassroom()
  }

  return (
    <div style={{marginTop: '30px'}}>
      {studentSupportNeeded ?
        <h1 
          className='support-needed' 
          style={{textAlign: 'center', paddingTop: '5px', marginLeft: '25%', marginRight: '25%',  borderRadius: '5px'}}
          >{singleStudent.username}</h1>
      :
        <h1 
        className='support-not-needed'
        style={{textAlign: 'center', paddingTop: '5px', marginLeft: '25%', marginRight: '25%',  borderRadius: '5px'}}
        >{singleStudent.username}</h1>
      } 
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  
          <input
            type="checkbox"
            id="needs-support"
            checked={studentSupportNeeded}
            onChange={() => setStudentSupportNeeded(!studentSupportNeeded)}
          />
          <label style={{textAlign: 'center', fontWeight: 'bold'}} htmlFor="needs-support">Needs Support</label>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <h3 style={{marginTop: '2px'}}><i> Seconds Given To Solve:</i>  {studentTimeNeeded}</h3>
          <button style={{width: '25px', marginLeft: '10px'}} onClick={() => setStudentTimeNeeded(studentTimeNeeded - 1)}> - </button>
          <button style={{width: '25px'}} onClick={() => setStudentTimeNeeded(studentTimeNeeded + 1)}> + </button>
        </div>
      </div>
      <h3><i> Total Responses Given:</i>  {sumAllResponses}</h3>
      <h3><i> Total Responses Correct:</i>  {sumAllCorrect}</h3>
      <h3><i> Overall Percent Correct:</i>  {sumAllCorrect === 0 ? "0" : (sumAllCorrect / sumAllResponses * 100).toFixed(2)}%</h3>

      <h2 style={{paddingTop: '3px', textAlign: 'center', backgroundColor: '#ED5564'}}># of Struggling Facts: {struggle.length}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {struggle.map(handleMap)}
      </div>

      <h2 style={{paddingTop: '3px', textAlign: 'center', backgroundColor: '#FFCE54'}}># of Mastered Facts: {mastered.length}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {mastered.map(handleMap)}
      </div>
      
      <h2 style={{paddingTop: '3px', textAlign: 'center', backgroundColor: '#A0D568'}}># of Almost-Mastered Facts: {almostMastered.length}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {almostMastered.map(handleMap)}
      </div>
      
      <h2 style={{paddingTop: '3px', textAlign: 'center', backgroundColor: '#4FC1E8'}}># of Still Learning Facts: {learning.length}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {learning.map(handleMap)}
      </div>
      
      <h2 style={{paddingTop: '3px', textAlign: 'center', backgroundColor: '#AC92EB'}}># of Unknown Facts: {unknown.length}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {unknown.map(handleMap)}
      </div>

      <button style={{margin: '20px'}} onClick={handleViewClass}>View Class</button>
      <button onClick={handleDeleteStudent}>Delete Student</button>
    </div>
  )
}

export default SingleStudentTeacherDash


// color: #AC92EB;
// color: #4FC1E8;
// color: #A0D568;
// color: #FFCE54;
// color: #ED5564;