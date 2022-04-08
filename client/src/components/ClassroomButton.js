import {UserContext} from "./UserContext"
import {useContext} from 'react'

function ClassroomButton ({classroom, setSelectedClassroom, setViewSingleStudent, triggerClassroomFetch, setTriggerClassroomFetch}) {

  const {fetchUser} = useContext(UserContext)

  function handleClassroomSelect () {
    setSelectedClassroom(classroom)
    setTriggerClassroomFetch(!triggerClassroomFetch)
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
    <div style={{ width: '220px', maxWidth: '40%', backgroundImage: 'linear-gradient(to bottom right, white, #A0D56888', border: '5px solid #A0D56888', borderRadius: '10px', margin:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1 style={{textAlign: 'center', margin: '2px', height: '80px'}}>{classroom.classroom_name}</h1>

      <button style={{margin: 'auto', marginTop: '5px', marginBottom: '5px'}} onClick={handleClassroomSelect}>VIEW CLASS</button>
      <button style={{margin: 'auto', marginBottom: '5px'}} onClick={handleClassroomDelete}>DELETE CLASS</button>
    </div>
  )
}

export default ClassroomButton