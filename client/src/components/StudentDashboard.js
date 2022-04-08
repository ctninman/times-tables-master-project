import { useContext } from "react"
import {UserContext} from "./UserContext"
import FactCard from "./FactCard"
import LoadScreen from "./LoadScreen"

function StudentDashboard () {

  const {user, allFacts} = useContext(UserContext)

  return (
    user ?
      <>
      <h2 style={{textDecoration: 'underline'}}>My Mastered Facts</h2>
        <div className="student-dash-header" style ={{backgroundColor: '#FFCE54', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          
          {user.masteries.filter((mastery) => mastery.mastery_level === 10).map((filteredMastery)=> {
            const problem = allFacts.find((fact) => fact.id === filteredMastery.problem_id)
            return <FactCard fact={problem} key={problem.id} />
          })}
        </div>
      <h2 style={{textDecoration: 'underline'}}>My Almost-Mastered Facts</h2>
      <div className="student-dash-header" style ={{backgroundColor: '#A0D568', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 ).map((filteredMastery)=> {
            const problem = allFacts.find((fact) => fact.id === filteredMastery.problem_id)
            return <FactCard fact={problem} key={problem.id} />
          })}
        </div>
      <h2 style={{textDecoration: 'underline'}}>Facts I'm Learning</h2>
      <div className="student-dash-header" style ={{backgroundColor: '#4FC1E8', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4).map((filteredMastery)=> {
            const problem = allFacts.find((fact) => fact.id === filteredMastery.problem_id)
            return <FactCard fact={problem} key={problem.id} />
          })}
        </div>

      <h2 style={{textDecoration: 'underline'}}>Facts I Need To Work On</h2>  
      <div className="student-dash-header" style ={{backgroundColor: '#ED5564', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {user.masteries.filter ((mastery) => mastery.mastery_level < 3).map((filteredMastery)=> {
            const problem = allFacts.find((fact) => fact.id === filteredMastery.problem_id)
            return <FactCard fact={problem} key={problem.id} />
          })}
        </div>
    </>
    :
    <div>
      <h1 style={{backgroundColor: '#ED5564', textAlign: 'center', padding: '15px'}}>Login to Access Your Dashboard</h1>
      <LoadScreen />
  </div>
  )
}

export default StudentDashboard