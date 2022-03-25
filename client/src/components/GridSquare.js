import {useState, useEffect, useRef} from 'react'

function GridSquare ({fact, user}) {

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
    <h2 style={{fontSize: '1.3vw'}}>{fact.multiplication_fact}</h2>
      :
    <h2 style={{fontSize: '1.6vw'}}>{fact.answer}</h2>}
    </div>
  ) 
  :
  <h1></h1>
}

export default GridSquare