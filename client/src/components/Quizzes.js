import { useContext, useState, useRef, useEffect } from "react"
import { useHistory } from "react-router"
import {UserContext} from "./UserContext"
import FactFilter from "./FactFilter"
import NumberSquare from "./NumberSquare"
import LoadScreen from "./LoadScreen";

function Quizzes () {

  let history = useHistory()

  const firstUpdate = useRef(true);
  const secondUpdate = useRef(true)
  const thirdUpdate = useRef(true)

  const {user, isTeacher} = useContext(UserContext)
  const [selectedQuizQuestion, setSelectedQuizQuestion] = useState(null)
  const [answerGiven, setAnswerGiven] = useState(false)
  const [makeRequest, setMakeRequest] = useState(false)
  const [timeToAnswer, setTimeToAnswer] = useState(null)
  const [timerFinished, setTimerFinished] = useState(false)
  const [generalToggler, setGeneralToggler] = useState(false)
  const [correctResponse, setCorrectResponse] = useState (null)
  // const [selectedFactNumbers, setSelectedFactNumbers] = useState([...Array(101).keys()])
  const [filteredQuestionList, setFilteredQuestionList] = useState(null)
  const [whichFacts, setWhichFacts] = useState(null)
  const [factMasteryLevel, setFactMasteryLevel] = useState(0)
  const [factTimesAnswered, setFactTimesAnswered] = useState(0)
  const [factTimesCorrect, setFactTimesCorrect] = useState(0)


  let hundredArray = [...Array(101).keys()]
  hundredArray.shift()

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
     else if (user) {
      // setSelectedQuizQuesti[Math.floor(Math.random.length)])
      setTimeToAnswer(user.time_to_solve)
    }
  }, [selectedQuizQuestion])

  useEffect (()=> {
    if (secondUpdate.current) {
      secondUpdate.current = false;
      return;
    }
    setFactMasteryLevel(selectedQuizQuestion.mastery_level)
    setFactTimesAnswered(selectedQuizQuestion.times_answered)
    setFactTimesCorrect(selectedQuizQuestion.times_correct)
    setTimeToAnswer(user.time_to_solve)
  }, [selectedQuizQuestion])

  useEffect (() => {
    if (thirdUpdate.current) {
      thirdUpdate.current = false;
      return;
    }
    if (selectedQuizQuestion) {
      patchStudentMastery()
    }
  }, [makeRequest, timerFinished])

  useEffect(() => {
    setFilteredQuestionList(hundredArray)
  }, [] )

  useEffect(() => {
    if (timeToAnswer === 0 && answerGiven === false) {
      setTimerFinished(true)
      setAnswerGiven(true)
      setFactTimesAnswered(factTimesAnswered + 1)
      if (factMasteryLevel > 0) {
        setFactMasteryLevel(selectedQuizQuestion.mastery_level - 1)
        console.log('time')
      }
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
    setTimerFinished(false)
    setCorrectResponse(null)
    if (whichFacts) {
      setSelectedQuizQuestion(filteredQuestionList[Math.floor(Math.random()*filteredQuestionList.length)])
      setAnswerGiven(false)
      setGeneralToggler(!generalToggler)
    } else {
      window.alert("Select which times tables you want to master.")
    }
  }

  return user && isTeacher === false? (
    <>
      
      {selectedQuizQuestion ?
      
      <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px'}}>

      {timerFinished ? <h1 style={{margin: '3px', color: 'red', textAlign: 'center'}}>Time's Up </h1> : null }
      {timeToAnswer != 0  && answerGiven === false? <h1 style={{margin: '3px', color: 'red', textAlign: 'center'}}>Time Left: {timeToAnswer} </h1> : null }
      {answerGiven && !timerFinished ? <h1 style={{margin: '3px', color: 'red', textAlign: 'center'}}>{correctResponse ? "CORRECT!" : "INCORRECT" }</h1> : null }

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',textAlign: 'center', marginBottom: '12px'}}>
         
        
       
          <button onClick={() => history.push('/my-times-tables')}style={{marginRight: '30px',width: '90px',marginTop: '30px'}}>STOP</button>
         
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 style={{margin: '3px', fontSize: '40px', padding: '8px', border: '4px solid', borderRadius: '10px'}}>{selectedQuizQuestion.problem.multiplication_fact} = {answerGiven ? `${selectedQuizQuestion.problem.answer}` : null}</h1>
           
          </div>
          <button style={{width: '90px', marginLeft: '30px', marginTop: '30px'}} onClick={setNextQuestion} >NEXT</button>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
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
              generalToggler={generalToggler}
              setCorrectResponse={setCorrectResponse}/>
            ))}
          </div>
        </div>
      </div>
      :
      <div style={{textAlign: 'center'}}>
        <div>
          <FactFilter 
            filteredQuestionList={filteredQuestionList}setFilteredQuestionList={setFilteredQuestionList} whichFacts={whichFacts} setWhichFacts={setWhichFacts}/>
        </div>
        <button style={{margin: '30px', fontSize: '14px'}} onClick={setNextQuestion}>BECOME A MASTER!</button>

        {/* <div><button onClick={checkLengths}>testArray</button></div> */}
      </div>
    }
    </>
  )
  :
  <div>
    <h1 style={{backgroundColor: '#ED5564', textAlign: 'center', padding: '15px'}}>Login to Access the Quiz Section</h1>
    <LoadScreen />
  </div>
}

export default Quizzes