
import { useContext } from "react"
import ClassroomButton from "./ClassroomButton"
import { UserContext} from "./UserContext"
import {useState, useEffect, useRef} from 'react'
import StudentInfo from "./StudentInfo"
import SingleStudentTeacherDash from "./SingleStudentTeacherDash"
import AddStudent from "./AddStudent"
import LoadScreen from "./LoadScreen"
import AddClassroom from "./AddClassroom"

function TeacherDashboard () {

  const {user, isLoading, setIsLoading} = useContext(UserContext)

  const firstUpdate = useRef(true);

  const [selectedClassroom, setSelectedClassroom] = useState(null)
  const [fullClassroomData, setFullClassroomData] = useState(null)
  const [viewSingleStudent, setViewSingleStudent] = useState(false)
  const [toggleAddStudent, setToggleAddStudent] = useState(false)
  const [toggleAddClassroom, setToggleAddClassroom] = useState(false)
  const [singleStudent, setSingleStudent] = useState(null)
  const [triggerClassroomFetch, setTriggerClassroomFetch] = useState(false)
  const [newStudentErrors, setNewStudentErrors] = useState(null)

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchClassroom()
  }, [triggerClassroomFetch])

  function fetchClassroom() {
    if (selectedClassroom) {
      setIsLoading(true)
      fetch(`/classrooms/${selectedClassroom.id}`, {method: "GET"})
        .then((res) => {
          res.json()
        .then((data) => {
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
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h1 style={{marginRight: '20px'}}>Teacher Dashboard</h1>
          <button onClick={() => setToggleAddClassroom(!toggleAddClassroom)}>{toggleAddClassroom ? "CANCEL": "+ ADD CLASSROOM"}</button>
        </div>

      {toggleAddClassroom ?
        <AddClassroom 
          setSelectedClassroom={setSelectedClassroom} 
          setToggleAddClassroom={setToggleAddClassroom}
          setTriggerClassroomFetch={setTriggerClassroomFetch}/>
        :
        null
      }
        
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {user.classrooms.map ((classroom) => (
          <ClassroomButton 
            key={classroom.id} 
            classroom={classroom}
            setSelectedClassroom={setSelectedClassroom}
            selectedClassroom={selectedClassroom}
            setViewSingleStudent={setViewSingleStudent}
            fetchClassroom={fetchClassroom}
            setTriggerClassroomFetch={setTriggerClassroomFetch}
            triggerClassroomFetch={triggerClassroomFetch}/>
        ))}
      
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
              <div style={{display: 'flex', flexDirection: 'row', margin: '10px', marginTop: '15px', alignItems: 'center'}}>
                <h1 style={{marginRight: '20px'}}>{selectedClassroom.classroom_name}</h1>
                <button onClick={() => setToggleAddStudent(!toggleAddStudent)}>{toggleAddStudent ? "CANCEL": "+ ADD STUDENT"}</button>
              </div>
                {toggleAddStudent === true 
                ?
                <>
                  <AddStudent 
                    selectedClassroom={selectedClassroom} 
                    setSingleStudent={setSingleStudent} 
                    fetchClassroom={fetchClassroom}
                    setTriggerClassroomFetch={setTriggerClassroomFetch}
                    newStudentErrors={newStudentErrors}
                    setNewStudentErrors={setNewStudentErrors}
                    setToggleAddStudent={setToggleAddStudent}/>
                  {newStudentErrors ? newStudentErrors.errors.map((error) => <h2 className="error">- {error}</h2>): null}
                </>
                :
                  null
                }
                
              <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', marginTop: '0px'}}>
                {fullClassroomData.students.map((student) => (
                  <StudentInfo 
                    key={student.username} 
                    student={student} 
                    setSingleStudent={setSingleStudent} 
                    setViewSingleStudent={setViewSingleStudent} 
                    viewSingleStudent={viewSingleStudent}
                    setTriggerClassroomFetch={setTriggerClassroomFetch}/>
                ))}
              </div>
            </div>
              :
            null
          }
        </>
      }
      </>
        :
      <SingleStudentTeacherDash 
        key={singleStudent.username} 
        singleStudent={singleStudent} 
        setViewSingleStudent={setViewSingleStudent}
        fetchClassroom={fetchClassroom}
        triggerClassroomFetch={triggerClassroomFetch}
        setTriggerClassroomFetch={setTriggerClassroomFetch}
        />
    
    }
      
        {selectedClassroom
          ? 
        <button style={{margin: '20px'}} onClick={handleDashboardHome}>DASHBOARD HOME</button>
          :
        null
        } 
    </>
  )
  :
  null
}

export default TeacherDashboard