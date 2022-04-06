import {useState, useEffect, useRef, useContext} from 'react'
import {UserContext} from "./UserContext"

function GridSquare ({fact}) {

  const {user, allFacts} = useContext(UserContext)

  const firstUpdate = useRef(true);

  const [masteryLevel, setMasteryLevel] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  // useEffect(() => {
  //     // if (firstUpdate.current) {
  //     //   firstUpdate.current = false;
  //     //   return;
  //     // }
  //   if (user) {
  //   let currentFact = user.masteries.find(mastery => mastery.problem.fact_number === fact.fact_number)
  //   setMasteryLevel(currentFact.mastery_level)
  //   }
  // }, []);

  useEffect(() => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false;
    //   return;
    // }
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
    {/* {masteryLevel === 10 && showAnswer === false ? <h5 className='grid-mastered'>MASTER</h5>: null} */}
    </div>
  ) 
  :
  <h1></h1>
}

export default GridSquare


// import {useState, useEffect, useRef, useContext} from 'react'
// import {UserContext} from "./UserContext"

// function GridSquare ({fact}) {

//   const {user} = useContext(UserContext)

//   const firstUpdate = useRef(true);

//   const [masteryLevel, setMasteryLevel] = useState(0)
//   const [showAnswer, setShowAnswer] = useState(false)
//   useEffect(() => {
//       if (firstUpdate.current) {
//         firstUpdate.current = false;
//         return;
//       }
//     let currentFact = user.masteries.find(mastery => mastery.problem.fact_number === fact.fact_number)
//     setMasteryLevel(currentFact.mastery_level)
//   }, [user]);

//   return user ?
//     (
//       showAnswer === false 
//         ? 
//     <div className='grid-square' style={{backgroundColor: '#f62d2d', display: 'inline-block',flexDirection: 'column'}}onClick={() => setShowAnswer(!showAnswer)}>
//       <h2 className='grid-fact' style={{backgroundColor: 'transparent', color: 'black'}}  >{fact.answer}</h2>
//       <h5 className='grid-mastered' style={{marginTop: '-15px', color: 'black'}}>{fact.multiplication_fact}</h5>
//     </div>
//       :
//       <div className='grid-square' style={{backgroundColor: '#ffee00', display: 'inline-block',flexDirection: 'column'}} onClick={() => setShowAnswer(!showAnswer)}>
//       <h2 className='grid-fact' style={{backgroundColor: 'transparent', color: 'black'}} >{fact.answer}</h2>
//       <h5 className='grid-mastered' style={{marginTop: '-15px', color: 'black'}}>{fact.multiplication_fact}</h5>
//     </div>
   
//   ) 
//   :
//   <h1>no user</h1>
// }

// export default GridSquare