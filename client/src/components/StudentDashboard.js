import { useContext } from "react"
import {UserContext} from "./UserContext"
import FactCard from "./FactCard"

function StudentDashboard () {

  const {user} = useContext(UserContext)
  const userMasteredFacts = user.masteries.filter ((mastery) => mastery.mastery_level === 10);
  const userAlmostMasteredFacts = user.masteries.filter ((mastery) => mastery.mastery_level < 10 && mastery.mastery_level >=8 );
  const userLearningFacts = user.masteries.filter ((mastery) => mastery.mastery_level < 8 && mastery.mastery_level >=4);
  const userUnknownFacts = user.masteries.filter ((mastery) => mastery.mastery_level < 3);

  return (
    <>
      <h1>Student Dashboard</h1>
      <h2>My Mastered Facts</h2>
        <div>
          {userMasteredFacts.map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
      <h2>My Almost-Mastered Facts</h2>
      <div>
          {userAlmostMasteredFacts.map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
      <h2>Facts I'm Learning</h2>
      <div>
          {userLearningFacts.map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>

      <h2>Facts I'm Need To Work On</h2>  
      <div>
          {userUnknownFacts.map((fact) => (
          <FactCard
            fact={fact}
            key={fact.id}/>
        ))}
        </div>
    </>
  )
}

export default StudentDashboard