import {useState, useEffect, useContext} from 'react'
import {UserContext} from "./UserContext"

function GridSquare ({fact}) {

  const {user, allFacts} = useContext(UserContext)

  const [masteryLevel, setMasteryLevel] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (user) {
    let currentFact = user.masteries.find(mastery => {
      const problem = allFacts.find((fact) => mastery.problem_id === fact.id)
      return problem.fact_number === fact.fact_number
    })
    setMasteryLevel(currentFact.mastery_level)
    }
  }, [user]);

  return user ?
    (
    <div className='grid-square' id={`level-${masteryLevel}`} onMouseEnter={() => setShowAnswer(true)} onMouseLeave={() => setShowAnswer(false)}>
    {showAnswer ===false 
      ? 
    <h2 className='grid-fact' >{fact.multiplication_fact}</h2>
      :
    <h2 className='grid-answer'>{fact.answer}</h2>}
    </div>
  ) 
  :
  <h1></h1>
}

export default GridSquare
