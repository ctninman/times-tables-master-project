// import { useContext, useState, useRef, useEffect } from "react"
// import {UserContext} from "./UserContext"
// import FactButton from "./FactButton"
// import NumberSquare from "./NumberSquare"

// function ActiveQuiz () {

//   const firstUpdate = useRef(true);

//   const {user, setUser} = useContext(UserContext)
//   const [selectedQuizQuestion, setSelectedQuizQuestion] = useState(user.masteries[Math.floor(Math.random()*user.masteries.length)])
//   const [answerGiven, setAnswerGiven] = useState(false)
//   const [makeRequest, setMakeRequest] = useState(false)


//   const [factMasteryLevel, setFactMasteryLevel] = useState(0)
//   const [factTimesAnswered, setFactTimesAnswered] = useState(0)
//   const [factTimesCorrect, setFactTimesCorrect] = useState(0)

//   let hundredArray = [...Array(101).keys()]
//   hundredArray.shift()

//   useEffect (()=> {
//     setFactMasteryLevel(selectedQuizQuestion.mastery_level)
//     setFactTimesAnswered(selectedQuizQuestion.times_answered)
//     setFactTimesCorrect(selectedQuizQuestion.times_correct)
//   }, [selectedQuizQuestion])

//   useEffect (() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false;
//       return;
//     }
//     fetch(`/masteries/${selectedQuizQuestion.id}`, {
//       method: "PATCH",
//       headers: {"Content-Type": "application/json",},
//       body: JSON.stringify(
//         {mastery_level: factMasteryLevel,
//           times_answered: factTimesAnswered,
//           times_correct: factTimesCorrect}
//       ),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//   }, [makeRequest])


//   function setNextQuestion () {
//     setSelectedQuizQuestion(user.masteries[Math.floor(Math.random()*user.masteries.length)])
//     setAnswerGiven(false)
//   }

//   return (
//     <>
//       <h1>{user.username}</h1>
//       {/* <div>
//         {user.masteries.map((mastery) => (
//           <FactButton key={mastery.id} mastery={mastery}/>
//         ))}
//       </div> */}
//       <div style={{display: 'flex', flexDirection: 'row'}}>
//         <div>
//           <h1>{selectedQuizQuestion.problem.multiplication_fact} = </h1>
//           <button onClick={setNextQuestion} >Next</button>
//         </div>
//         <div className='quiz-grid'>
//           {hundredArray.map((number) => (
//             <NumberSquare 
//             key={number} 
//             number={number} 
//             setSelectedQuizQuestion={setSelectedQuizQuestion} selectedQuizQuestion={selectedQuizQuestion} 
//             answerGiven={answerGiven}
//             setAnswerGiven={setAnswerGiven}
//             factMasteryLevel={factMasteryLevel}
//             setFactMasteryLevel={setFactMasteryLevel}
//             factTimesAnswered={factTimesAnswered}
//             setFactTimesAnswered={setFactTimesAnswered}
//             factTimesCorrect={factTimesCorrect}
//             setFactTimesCorrect={setFactTimesCorrect}
//             makeRequest={makeRequest}
//             setMakeRequest={setMakeRequest}/>
//           ))}
//         </div>
//       </div>
//       <button onClick={() => console.log(selectedQuizQuestion)}>testArray</button>
//     </>
//   )
// }

// export default ActiveQuiz