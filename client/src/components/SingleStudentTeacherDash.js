import {useState, useEffect, useRef} from 'react'

function SingleStudentTeacherDash ({singleStudent, setViewSingleStudent}) {

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
    fetch(`/students/${singleStudent.id}`, {method: "DELETE"})
    .then((r) => r.json())
    .then((data) => {
      console.log("Deleted")
    })
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

  return (
    <div>
      <h1>{singleStudent.username}</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <button onClick={() => setStudentSupportNeeded(!studentSupportNeeded)}>Needs Support</button>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <button onClick={() => setStudentTimeNeeded(studentTimeNeeded - 1)}> - </button>
          <h2>{studentTimeNeeded}</h2>
          <button onClick={() => setStudentTimeNeeded(studentTimeNeeded + 1)}> + </button>
        </div>
      </div>
      <h3>Total Responses Given: {sumAllResponses}</h3>
      <h3>Total Responses Correct: {sumAllCorrect}</h3>
      <h3>Overall Percent Correct: {(sumAllCorrect / sumAllResponses * 100).toFixed(2)}%</h3>

      <h3># of Struggling Facts: {struggle.length}</h3>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {struggle.map((item) => <p style={{marginLeft: '8px', marginRight: '8px'}}>{item.problem.multiplication_fact}</p>)}
      </div>

      <h3># of Mastered Facts: {mastered.length}</h3>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {mastered.map((item) => <p style={{marginLeft: '8px', marginRight: '8px'}}>{item.problem.multiplication_fact}</p>)}
      </div>
      
      <h3># of Almost-Mastered Facts: {almostMastered.length}</h3>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {almostMastered.map((item) => <p style={{marginLeft: '8px', marginRight: '8px'}}>{item.problem.multiplication_fact}</p>)}
      </div>
      
      <h3># of Still Learning Facts: {learning.length}</h3>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {learning.map((item) => <p style={{marginLeft: '8px', marginRight: '8px'}}>{item.problem.multiplication_fact}</p>)}
      </div>
      
      <h3># of Unknown Facts: {unknown.length}</h3>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {unknown.map((item) => <p style={{marginLeft: '8px', marginRight: '8px'}}>{item.problem.multiplication_fact}</p>)}
      </div>

      <button onClick={() => setViewSingleStudent(false)}>View Class</button>
      <button onClick={handleDeleteStudent}>Delete Student</button>
    </div>
  )
}

export default SingleStudentTeacherDash