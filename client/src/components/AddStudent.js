import {useState, useRef, useEffect} from "react"

function AddStudent ({setSingleStudent, setToggleAddStudent, selectedClassroom, fetchClassroom, setNewStudentErrors}) {

    const [newStudentUsername, setNewStudentUsername] = useState("");
    const [newStudentPassword, setNewStudentPassword] = useState("");
    const [newStudentPasswordConfirmation, setNewStudentPasswordConfirmation] = useState("")
    const [triggerClassroomUpdate, setTriggerClassroomUpdate] = useState(false)

  const firstUpdate = useRef(true)

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchClassroom()
  }, [triggerClassroomUpdate]) 

    function handleAddStudent (e) {
      e.preventDefault()
      fetch("/signup-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newStudentUsername,
          password: newStudentPassword,
          password_confirmation: newStudentPasswordConfirmation,
          classroom_id: selectedClassroom.id,
          offer_support: false,
          time_to_solve: 7,
          is_teacher: false
        }),
      }).then((r) => {
        if (r.ok) {
          r.json()
          .then((student) => {
            setSingleStudent(student)
            setTriggerClassroomUpdate(!triggerClassroomUpdate)
            setToggleAddStudent(false)
          });
        } else {
          r.json()
          .then((err) => setNewStudentErrors(err))
        }
      });
    }

    return (
      <form onSubmit={handleAddStudent}>
        <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={newStudentUsername}
          onChange={(e) => setNewStudentUsername(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={newStudentPassword}
          onChange={(e) => setNewStudentPassword(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="password-confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password-confirmation"
          value={newStudentPasswordConfirmation}
          onChange={(e) => setNewStudentPasswordConfirmation(e.target.value)}
        />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }


export default AddStudent