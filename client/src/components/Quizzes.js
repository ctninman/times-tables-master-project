import { useContext, useState, useRef, useEffect } from "react"
import {UserContext} from "./UserContext"
import FactButton from "./FactButton"
import NumberSquare from "./NumberSquare"

function Quizzes () {

  const firstUpdate = useRef(true);

  const {user, setUser} = useContext(UserContext)
  const [selectedQuizQuestion, setSelectedQuizQuestion] = useState(user.masteries[Math.floor(Math.random()*user.masteries.length)])
  const [answerGiven, setAnswerGiven] = useState(false)
  const [makeRequest, setMakeRequest] = useState(false)
  const [timeToAnswer, setTimeToAnswer] = useState(user.time_to_solve)
  const [timerFinished, setTimerFinished] = useState(false)
  const [generalToggler, setGeneralToggler] = useState(false)


  const [factMasteryLevel, setFactMasteryLevel] = useState(0)
  const [factTimesAnswered, setFactTimesAnswered] = useState(0)
  const [factTimesCorrect, setFactTimesCorrect] = useState(0)

  let hundredArray = [...Array(101).keys()]
  hundredArray.shift()

  useEffect (()=> {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setFactMasteryLevel(selectedQuizQuestion.mastery_level)
    setFactTimesAnswered(selectedQuizQuestion.times_answered)
    setFactTimesCorrect(selectedQuizQuestion.times_correct)
    setTimeToAnswer(user.time_to_solve)
  }, [selectedQuizQuestion])

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    patchStudentMastery()
    // fetch(`/masteries/${selectedQuizQuestion.id}`, {
    //   method: "PATCH",
    //   headers: {"Content-Type": "application/json",},
    //   body: JSON.stringify(
    //     {mastery_level: factMasteryLevel,
    //       times_answered: factTimesAnswered,
    //       times_correct: factTimesCorrect}
    //   ),
    // })
      // .then((res) => res.json())
      // .then((data) => console.log(data))
  }, [makeRequest, timerFinished])

  useEffect(() => {
    if (timeToAnswer === 0) {
      setAnswerGiven(true)
      setFactTimesAnswered(factTimesAnswered + 1)
      if (factMasteryLevel > 0) {
        setFactMasteryLevel(selectedQuizQuestion.mastery_level - 1)
        console.log('time')
      }
      setTimerFinished(!timerFinished)
    } else if (answerGiven) {
      return
    } else if (timeToAnswer > 0) {
      const interval = setInterval(() => {
        setTimeToAnswer(timeToAnswer - 1)
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeToAnswer]);

  function patchStudentMastery () {
    fetch(`/masteries/${selectedQuizQuestion.id}`, {
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
  }

  function setNextQuestion () {
    setSelectedQuizQuestion(user.masteries[Math.floor(Math.random()*user.masteries.length)])
    setAnswerGiven(false)
    setGeneralToggler(!generalToggler)
  }

  return (
    <>
      <h1>{user.username}</h1>
      {/* <div>
        {user.masteries.map((mastery) => (
          <FactButton key={mastery.id} mastery={mastery}/>
        ))}
      </div> */}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <h1>{selectedQuizQuestion.problem.multiplication_fact} = {answerGiven ? `${selectedQuizQuestion.problem.answer}` : null}</h1>
          <h1>{timeToAnswer === 0 || answerGiven ? "Time's Up" : `Time: ${timeToAnswer}`} </h1>
          <button onClick={setNextQuestion} >Next</button>
        </div>
        <div className='quiz-grid'>
          {hundredArray.map((number) => (
            <NumberSquare 
            key={number} 
            number={number} 
            setSelectedQuizQuestion={setSelectedQuizQuestion} selectedQuizQuestion={selectedQuizQuestion} 
            answerGiven={answerGiven}
            setAnswerGiven={setAnswerGiven}
            factMasteryLevel={factMasteryLevel}
            setFactMasteryLevel={setFactMasteryLevel}
            factTimesAnswered={factTimesAnswered}
            setFactTimesAnswered={setFactTimesAnswered}
            factTimesCorrect={factTimesCorrect}
            setFactTimesCorrect={setFactTimesCorrect}
            makeRequest={makeRequest}
            setMakeRequest={setMakeRequest}
            timeToAnswer={timeToAnswer}
            patchStudentMastery={patchStudentMastery}
            timerFinished={timerFinished}
            generalToggler={generalToggler}/>
          ))}
        </div>
      </div>
      <button onClick={() => console.log(selectedQuizQuestion)}>testArray</button>
    </>
  )
}

export default Quizzes