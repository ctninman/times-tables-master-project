import { useContext, useState,useEffect } from "react"
import {UserContext} from "./UserContext"
import FactCard from "./FactCard"

function StudentDashboard () {

  const {user} = useContext(UserContext)
  // const [userMasteredFacts, setUserMasteredFacts] = useState(null);
  // const [userAlmostMasteredFacts, setUserAlmostMasteredFacts] = useState(null);
  // const [userLearningFacts, setUserLearningFacts] = useState(null);
  // const [userUnknownFacts, setUserUnknownFacts] = useState(null);

  // useEffect (() => {
  //   setUserMasteredFacts(user.masteries.filter ((mastery) => mastery.mastery_level === 10))
  //   setUserAlmostMasteredFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ))
  //   setUserLearningFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4))
  //   setUserUnknownFacts(user.masteries.filter ((mastery) => mastery.mastery_level < 3))
  // }, [user])

  // useEffect (() => {
  //   if (user) 
  // })

  return (
    user ?
      <>
      {/* <h1>Dashboard</h1> */}
      <h2 style={{textDecoration: 'underline'}}>My Mastered Facts</h2>
        <div className="student-dash-header" style ={{backgroundColor: '#FFCE54', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level === 10).map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
      <h2 style={{textDecoration: 'underline'}}>My Almost-Mastered Facts</h2>
      <div className="student-dash-header" style ={{backgroundColor: '#A0D568', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ).map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
      <h2 style={{textDecoration: 'underline'}}>Facts I'm Learning</h2>
      <div className="student-dash-header" style ={{backgroundColor: '#4FC1E8', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4).map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>

      <h2 style={{textDecoration: 'underline'}}>Facts I Need To Work On</h2>  
      <div className="student-dash-header" style ={{backgroundColor: '#ED5564', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 3).map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
    </>
    :
    null
  )
}

export default StudentDashboard