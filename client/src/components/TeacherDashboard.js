
import { useContext } from "react"
import ClassroomButton from "./ClassroomButton"
import { UserContext} from "./UserContext"
import {useState, useEffect, useRef} from 'react'
import StudentInfo from "./StudentInfo"
import SingleStudentTeacherDash from "./SingleStudentTeacherDash"
import AddStudent from "./AddStudent"
import LoadScreen from "./LoadScreen"
import AddClassroom from "./AddClassroom"

function TeacherDashboard ({teacherLogin}) {

  const {user, isLoading, setIsLoading} = useContext(UserContext)

  const firstUpdate = useRef(true);

  const [selectedClassroom, setSelectedClassroom] = useState(null)
  const [fullClassroomData, setFullClassroomData] = useState(null)
  const [viewSingleStudent, setViewSingleStudent] = useState(false)
  const [toggleAddStudent, setToggleAddStudent] = useState(false)
  const [singleStudent, setSingleStudent] = useState(null)
  const [addClassroomName, setAddClassroomName] = useState('New Class')

  useEffect (() => {
    if (selectedClassroom) {
      setIsLoading(true)
      // if (firstUpdate.current) {
      //   firstUpdate.current = false;
      //   return;
      // }
      fetch(`/classrooms/${selectedClassroom.id}`, {method: "GET"})
        .then((res) => {
          res.json()
        .then((data) => {
          console.log(data)
          setFullClassroomData(data)
          setIsLoading(false)
        })
      })
    }
  }, [selectedClassroom])

  function handleAddClassroom () {
      // e.preventDefault();
      // setErrors([]);
      // setIsLoading(true);
      if (teacherLogin === false) {
        fetch("/classrooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            classroom_name: addClassroomName,
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

  function handleAddStudent () {
    fetch("/signup-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "student",
        password: "password",
        password_confirmation: "password",
        classroom_id: selectedClassroom.id
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
    <>
      <h1>Teacher Dashboard</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {user.classrooms.map ((classroom) => (
          <ClassroomButton 
            key={classroom.id} 
            classroom={classroom}
            setSelectedClassroom={setSelectedClassroom}
            selectedClassroom={selectedClassroom}/>
        ))}
        <AddClassroom />
        {/* <button onClick={handleAddClassroom}>Add Classroom</button> */}
      </div>
      {viewSingleStudent === false 
        ? 
        
        <>
          {isLoading === true 
            ?
          
            <LoadScreen />
            : 
          
          <>
            {selectedClassroom && fullClassroomData 
                ?
              <div>
                <button onClick={() => setToggleAddStudent(!toggleAddStudent)}>{toggleAddStudent ? "Cancel": "Add Student"}</button>
                {toggleAddStudent === true 
                ?
                  <AddStudent selectedClassroom={selectedClassroom} setSingleStudent={setSingleStudent}/>
                :
                  null
                }
                <h1 style={{margin: '2px'}}>{selectedClassroom.classroom_name}</h1>
                <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', marginTop: '0px'}}>
                  {fullClassroomData.students.map((student) => (
                    <StudentInfo key={student.username} student={student} setSingleStudent={setSingleStudent} setViewSingleStudent={setViewSingleStudent} viewSingleStudent={viewSingleStudent}/>
                  ))}
                </div>
              </div>
                :
              <h1>Nope Slected</h1>
            }
          </>
        }
        </>
          :
        <SingleStudentTeacherDash key={singleStudent.id} singleStudent={singleStudent} setViewSingleStudent={setViewSingleStudent}/>
    
    
    }
      
        <button onClick={() => setSelectedClassroom(null)}>Dashboard Home</button>
    </>
  )
}

export default TeacherDashboard