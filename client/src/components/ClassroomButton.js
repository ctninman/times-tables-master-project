function ClassroomButton ({classroom, selectedClassroom, setSelectedClassroom}) {

  function handleClassroomSelect () {
    setSelectedClassroom(classroom)
  }

  return (
    <div style={{backgroundColor: 'lightblue', marginLeft: '20px', marginRight: '20px', width: '28%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1 style={{textAlign: 'center', margin: '2px'}}>{classroom.classroom_name}</h1>
      <h3 style={{textAlign: 'center', margin: '2px'}}># of Students: {classroom.number_of_students}</h3>
      {/* <h3 style={{textAlign: 'center', margin: '2px'}}>Mastery % : {classroom.number_of_students}</h3> */}

      <button onClick={handleClassroomSelect}>View Class</button>
    </div>
  )
}

export default ClassroomButton