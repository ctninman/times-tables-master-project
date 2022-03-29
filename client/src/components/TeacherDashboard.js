
import { useContext } from "react"
import ClassroomButton from "./ClassroomButton"
import { UserContext} from "./UserContext"
import {useState, useEffect, useRef} from 'react'
import StudentInfo from "./StudentInfo"
import SingleStudentTeacherDash from "./SingleStudentTeacherDash"

function TeacherDashboard () {

  const {user} = useContext(UserContext)

  const firstUpdate = useRef(true);

  const [selectedClassroom, setSelectedClassroom] = useState(null)
  const [fullClassroomData, setFullClassroomData] = useState(null)
  const [viewSingleStudent, setViewSingleStudent] = useState(false)
  const [singleStudent, setSingleStudent] = useState(null)

  useEffect (() => {
    if (selectedClassroom) {
      // if (firstUpdate.current) {
      //   firstUpdate.current = false;
      //   return;
      // }
      fetch(`/classrooms/${selectedClassroom.id}`, {method: "GET"})
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setFullClassroomData(data)
        })
    }
  }, [selectedClassroom])

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
        <button>Add Classroom</button>
      </div>
      {viewSingleStudent === false ? 
        <>
          {selectedClassroom && fullClassroomData ?
          <div>
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
          :
        <SingleStudentTeacherDash key={singleStudent.id} singleStudent={singleStudent} setViewSingleStudent={setViewSingleStudent}/>
    
    
    }
      
        <button onClick={() => setSelectedClassroom(null)}>Dashboard Home</button>
    </>
  )
}

export default TeacherDashboard