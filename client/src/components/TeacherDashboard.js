
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
  const [toggleAddClassroom, setToggleAddClassroom] = useState(false)
  const [singleStudent, setSingleStudent] = useState(null)
  const [addClassroomName, setAddClassroomName] = useState('New Class')

  useEffect (() => {
    fetchClassroom()
    // if (selectedClassroom) {
    //   setIsLoading(true)
    //   // if (firstUpdate.current) {
    //   //   firstUpdate.current = false;
    //   //   return;
    //   // }
    //   fetch(`/classrooms/${selectedClassroom.id}`, {method: "GET"})
    //     .then((res) => {
    //       res.json()
    //     .then((data) => {
    //       console.log(data)
    //       setFullClassroomData(data)
    //       setIsLoading(false)
    //     })
    //   })
    // }
  }, [selectedClassroom])

  function fetchClassroom() {
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
  }

  function handleDashboardHome () {
    setViewSingleStudent(false)
    setSelectedClassroom(null)
  }


  return user ?
  (
    <>
      <h1>Teacher Dashboard</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {user.classrooms.map ((classroom) => (
          <ClassroomButton 
            key={classroom.id} 
            classroom={classroom}
            setSelectedClassroom={setSelectedClassroom}
            selectedClassroom={selectedClassroom}
            setViewSingleStudent={setViewSingleStudent}/>
        ))}
        
        <div>
          <button onClick={() => setToggleAddClassroom(!toggleAddClassroom)}>Add Classroom</button>
          
          {toggleAddClassroom ?
          <AddClassroom setSelectedClassroom={setSelectedClassroom} setToggleAddClassroom={setToggleAddClassroom}/>
          :
          null}
        
        </div>
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
      
        <button onClick={handleDashboardHome}>Dashboard Home</button>
    </>
  )
  :
  null
}

export default TeacherDashboard