import {useState, useContext} from "react"
import {UserContext} from "./UserContext"

function AddClassroom ({setSelectedClassroom, triggerClassroomFetch, setTriggerClassroomFetch, setToggleAddClassroom}) {

    const {user, isTeacher, fetchUser} = useContext(UserContext)

    const [newClassroomName, setNewClassroomName] = useState("");

    function handleAddClassroom (e) {
      e.preventDefault();

      if (isTeacher === true) {
        fetch("/classrooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            classroom_name: newClassroomName,
            teacher_id: user.id
          }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((classroom) => {
              setSelectedClassroom(classroom)
            })
            .then(() => {
              setTriggerClassroomFetch(!triggerClassroomFetch)
            })
            .then(fetchUser())
          } else {
            r.json()
          }
        })
      } 
      setNewClassroomName("")
      setToggleAddClassroom(false)
    }

    

    return (
      <form onSubmit={handleAddClassroom}>
        <label htmlFor="classroom-name">Classroom Name:</label>
        <input
          type="text"
          id="classroom-name"
          value={newClassroomName}
          onChange={(e) => setNewClassroomName(e.target.value)}
        />

        <button type="submit">SUBMIT</button>
      </form>
    );
  }


export default AddClassroom