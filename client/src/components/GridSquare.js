import {useState, useEffect, useRef, useContext} from 'react'
import {UserContext} from "./UserContext"

function GridSquare ({fact}) {

  const {user} = useContext(UserContext)

  const firstUpdate = useRef(true);

  const [masteryLevel, setMasteryLevel] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
    let currentFact = user.masteries.find(mastery => mastery.problem.fact_number === fact.fact_number)
    setMasteryLevel(currentFact.mastery_level)
  }, [user]);

  return user ?
    (
    <div className='grid-square' id={`level-${masteryLevel}`} onClick={() => setShowAnswer(!showAnswer)}>
    {showAnswer ===false 
      ? 
    <h2 className='grid-fact' >{fact.multiplication_fact}</h2>
      :
    <h2 className='grid-answer'>{fact.answer}</h2>}
    {masteryLevel === 10 ? <h5 className='grid-mastered'>MASTER</h5>: null}
    </div>
  ) 
  :
  <h1></h1>
}

export default GridSquare