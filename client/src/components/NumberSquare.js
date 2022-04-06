import {useState, useEffect, useRef, useContext} from 'react'
import {UserContext} from './UserContext'

function NumberSquare ({
  number, 
  selectedQuizQuestion, 
  setSelectedQuizQuestion, 
  answerGiven, 
  setAnswerGiven,
  factMasteryLevel,
  setFactMasteryLevel,
  factTimesAnswered,
  setFactTimesAnswered,
  factTimesCorrect,
  setFactTimesCorrect,
  makeRequest,
  setMakeRequest,
  timeToAnswer,
  timerFinished,
  generalToggler,
  setCorrectResponse,
  selectedQuizProblem
}) {
  

  const {user} = useContext(UserContext)
  const firstUpdate = useRef(true);

  const [revealAnswer, setRevealAnswer] = useState(false)
  const [highlightNumber, setHighlightNumber] = useState(false)

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (selectedQuizProblem.answer === number) {
      setRevealAnswer(true)
    }
  }, [makeRequest, timerFinished])

  useEffect (() => {
    setRevealAnswer(false)
  }, [generalToggler])

  // const [factMasteryLevel, setFactMasteryLevel] = useState(selectedQuizQuestion.mastery_level)
  // const [factTimesAnswered, setFactTimesAnswered] = useState(selectedQuizQuestion.times_answered)
  // const [factTimesCorrect, setFactTimesCorrect] = useState(selectedQuizQuestion.times_correct)

  // useEffect (() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  //   fetch(`/masteries/${selectedQuizQuestion.id}`, {
  //     method: "PATCH",
  //     headers: {"Content-Type": "application/json",},
  //     body: JSON.stringify(
  //       {mastery_level: factMasteryLevel,
  //         times_answered: factTimesAnswered,
  //         times_correct: factTimesCorrect}
  //     ),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // }, [factTimesAnswered])

  function handleAnswer () {
    if (answerGiven === false) {
      setAnswerGiven(true)
      setFactTimesAnswered(factTimesAnswered + 1)
      if (selectedQuizProblem.answer == number) {
        setCorrectResponse(true)
        setFactTimesCorrect(factTimesCorrect + 1)
        if (factMasteryLevel < 10) {
          setFactMasteryLevel(factMasteryLevel + 1)
          console.log('1st')
        }
      } else if (selectedQuizProblem.answer != number) {
        setCorrectResponse(false)
        if (factMasteryLevel > 0) {
          setFactMasteryLevel(selectedQuizQuestion.mastery_level - 1)
          console.log('2nd')
        }
      }
      setMakeRequest(() => !makeRequest)
    }
  }



  return (
    <div 
      onMouseEnter={() => setHighlightNumber(true)} onMouseLeave={() => setHighlightNumber(false)}
      className={ revealAnswer ? 'number-square-reveal': `number-square-${number % 10}`} 
      style={{ display: 'inline-block',flexDirection: 'column'}}onClick={handleAnswer}>
        {highlightNumber 
          ?
        <div className='highlighter'>
          <h2 className='number-grid-fact' style={{backgroundColor: 'transparent', color: 'black'}}  >{number}</h2>
        </div>
          :
        <div>
          <h2 className='number-grid-fact' style={{backgroundColor: 'transparent', color: 'black'}}  >{number}</h2>
        </div>
      }
    </div>
   
  ) 
}

export default NumberSquare