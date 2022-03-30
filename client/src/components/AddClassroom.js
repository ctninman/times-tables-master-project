import {useState, useContext} from "react"
import {UserContext} from "./UserContext"

function AddClassroom () {

    const {user, teacherLogin} = useContext(UserContext)

    const [newClassroomName, setNewClassroomName] = useState("");

    function handleAddClassroom () {
      // e.preventDefault();
      // setErrors([]);
      // setIsLoading(true);
      if (teacherLogin === true) {
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
          // setIsLoading(false);
          if (r.ok) {
            r.json()
            .then((classroom) => console.log(classroom));
          } else {
            r.json()
            // .then((err) => setErrors(err.errors));
            console.log("um, nope")
          }
        });
      }
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
 

        <button type="submit">Submit</button>
      </form>
    );
  }


export default AddClassroom