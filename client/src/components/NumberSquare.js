import {useState, useEffect, useRef} from 'react'

function NumberSquare ({
  number, 
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
  timerFinished,
  generalToggler,
  setCorrectResponse,
  selectedQuizProblem,
}) {
  
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

  function handleAnswer () {
    if (answerGiven === false) {
      setAnswerGiven(true)
      setFactTimesAnswered(factTimesAnswered + 1)
      if (selectedQuizProblem.answer === number) {
        setCorrectResponse(true)
        setFactTimesCorrect(factTimesCorrect + 1)
        if (factMasteryLevel < 10) {
          setFactMasteryLevel(factMasteryLevel + 1)
        }
        setMakeRequest(() => !makeRequest)
      } else if (selectedQuizProblem.answer != number) {
        setCorrectResponse(false)
        if (factMasteryLevel > 0) {
          setFactMasteryLevel(factMasteryLevel - 1)
        }
        setMakeRequest(() => !makeRequest)
      }
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