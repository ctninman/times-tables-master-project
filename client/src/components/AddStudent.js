import {useState} from "react"

function AddStudent ({setSingleStudent, selectedClassroom}) {

    const [newStudentUsername, setNewStudentUsername] = useState("");
    const [newStudentPassword, setNewStudentPassword] = useState("");
    // const [teacherLogin, setTeacherLogin] = useState(false)
    const [newStudentPasswordConfirmation, setNewStudentPasswordConfirmation] = useState("")

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
        // setIsLoading(false);
        if (r.ok) {
          r.json()
          .then((student) => setSingleStudent(student));
        } else {
          r.json()
          // .then((err) => setErrors(err.errors));
          console.log("um, nope")
        }
      });
    }

    return (
      <form onSubmit={handleAddStudent}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={newStudentUsername}
          onChange={(e) => setNewStudentUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={newStudentPassword}
          onChange={(e) => setNewStudentPassword(e.target.value)}
        />
        <label htmlFor="password-confirmation">Password:</label>
        <input
          type="password"
          id="password-confirmation"
          value={newStudentPasswordConfirmation}
          onChange={(e) => setNewStudentPasswordConfirmation(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }


export default AddStudent