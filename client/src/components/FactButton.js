import {useState, useEffect, useRef} from 'react'
import { useContext } from "react"
import {UserContext} from "./UserContext"

function FactButton ({mastery}) {

  const {user, setUser} = useContext(UserContext)
  const firstUpdate = useRef(true);

  const [factMasteryLevel, setFactMasteryLevel] = useState(mastery.mastery_level)
  const [factTimesAnswered, setFactTimesAnswered] = useState(mastery.times_answered)
  const [factTimesCorrect, setFactTimesCorrect] = useState(mastery.times_correct)
  
  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetch(`/masteries/${mastery.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(
        {mastery_level: factMasteryLevel,
          times_answered: factTimesAnswered,
          times_correct: factTimesCorrect}
      ),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [factTimesAnswered])

  function handleMasteryUpdate () {
    if (factMasteryLevel < 10) {
      setFactMasteryLevel(prevCount => prevCount + 1)
    }
    setFactTimesAnswered(prevCount => prevCount + 1)
    setFactTimesCorrect(prevCount => prevCount + 1)
  }

  return (
    <button onClick={handleMasteryUpdate}>{mastery.problem.multiplication_fact}</button>
  )
}

export default FactButton