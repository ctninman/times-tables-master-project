import {UserContext} from "./UserContext"
import {useContext} from 'react'

function ClassroomButton ({classroom, selectedClassroom, setSelectedClassroom, setViewSingleStudent}) {

  const {fetchUser} = useContext(UserContext)

  function handleClassroomSelect () {
    setSelectedClassroom(classroom)
    setViewSingleStudent(false)
  }

  function handleClassroomDelete () {
    let shouldDelete = window.confirm("Removing this classroom will also remove all your students' data.")
    if (shouldDelete ) {
      let confirmShouldDelete = window.confirm("Are you sure you want to do that?")
      if (confirmShouldDelete) {
        setViewSingleStudent(false)
        fetch(`/classrooms/${classroom.id}`, {method: "DELETE"})
        .then((r) => r.json())
        .then((data) => {
          console.log("Deleted")
          fetchUser()
          setSelectedClassroom(null)  
        })
      }
    }
  }

  return (
    <div style={{backgroundColor: '#4FC1E8', border: '2px solid', borderRadius: '5px', marginLeft: '20px', marginRight: '20px', width: '28%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1 style={{textAlign: 'center', margin: '2px'}}>{classroom.classroom_name}</h1>
      <h3 style={{textAlign: 'center', margin: '2px'}}># of Students: {classroom.number_of_students}</h3>
      {/* <h3 style={{textAlign: 'center', margin: '2px'}}>Mastery % : {classroom.number_of_students}</h3> */}

      <button style={{margin: 'auto', marginTop: '5px', marginBottom: '5px'}} onClick={handleClassroomSelect}>View Class</button>
      <button style={{margin: 'auto', marginBottom: '5px'}} onClick={handleClassroomDelete}>Delete Class</button>
    </div>
  )
}

export default ClassroomButton