import {UserContext} from "./UserContext"
import {useState, useContext, useEffect, useRef} from 'react'
import LoadScreen from "./LoadScreen"

function FactFilter ({setFilteredQuestionList, setWhichFactsArray, whichFacts, setWhichFacts, setSelectedQuizQuestion, filteredQuestionList}) {

  const {user} = useContext(UserContext)

  const firstUpdate = useRef(true)
  const secondUpdate = useRef(true)
  
  const allX = [...Array(101).keys()]
  allX.shift()
  const oneX = [1,2,3,4,5,6,7,8,9,10,11,21,31,41,51,61,71,81,91]
  const twoX = [11,12,13,14,15,16,17,18,19,20,2,22,32,42,52,62,72,82,92]
  const threeX = [21,22,23,24,25,26,27,28,29,30,3,13,33,43,53,63,73,83,93]
  const fourX = [31,32,33,34,35,36,37,38,39,40,4,14,24,44,54,64,74,84,94]
  const fiveX = [41,42,43,44,45,46,47,48,49,50,5,15,25,35,55,65,75,85,95]
  const sixX = [51,52,53,54,55,56,57,58,59,60,6,16,26,36,46,66,76,86,96]
  const sevenX = [61,62,63,64,65,66,67,68,69,70,7,17,27,37,47,57,77,87,97]
  const eightX = [71,72,73,74,75,76,77,78,79,80,8,18,28,38,48,58,68,88,98]
  const nineX = [81,82,83,84,85,86,87,88,89,90,9,19,29,39,49,59,69,79,99]
  const tenX = [91,92,93,94,95,96,97,98,99,100,10,20,30,40,50,60,70,80,90]

  const [filterIsLoading, setFilterIsLoading] = useState(false)
  const [triggerFactFetch, setTriggerFactFetch] = useState(false)

  function filterFacts (numberArray) {
    setFilteredQuestionList(user.masteries.filter((mastery) => (
      numberArray.includes(mastery.problem_id)
    )))
    setWhichFactsArray(numberArray)
  }

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
      setSelectedQuizQuestion(filteredQuestionList[Math.floor(Math.random()*filteredQuestionList.length)])
  }, [filteredQuestionList])

  function handleFilterChange (event) {
    setWhichFacts(event.target.value)
  }

  useEffect (() => {
    if (secondUpdate.current) {
      secondUpdate.current = false;
      return;
    }
    fetchToughFacts()
  }, [triggerFactFetch])

  function fetchToughFacts() {
    if (user) {
      setFilterIsLoading(true)
      fetch(`/students/${user.id}/most-difficult`, {method: "GET"})
        .then((res) => {
          res.json()
        .then((data) => {
          let difficulty_array = []
          data.map((fact) => difficulty_array.push(fact.problem_id))
          filterFacts(difficulty_array)
        })
        setFilterIsLoading(false)
      })
    }
  }

  return (
    filterIsLoading ?
    <LoadScreen />
      :
    <div style={{marginTop: '10px'}}>
      <div>
        <button value={"1x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(oneX)}} style={{width: '34px', fontSize: '14px'}}>1x</button>
        <button value={"2x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(twoX)}} style={{width: '34px', fontSize: '14px'}}>2x</button>
        <button value={"3x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(threeX)}} style={{width: '34px', fontSize: '14px'}}>3x</button>
        <button value={"4x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(fourX)}} style={{width: '34px', fontSize: '14px'}}>4x</button>
        <button value={"5x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(fiveX)}} style={{width: '34px', fontSize: '14px'}}>5x</button>
        <button value={"6x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(sixX)}} style={{width: '34px', fontSize: '14px'}}>6x</button>
        <button value={"7x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(sevenX)}} style={{width: '34px', fontSize: '14px'}}>7x</button>
        <button value={"8x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(eightX)}} style={{width: '34px', fontSize: '14px'}}>8x</button>
        <button value={"9x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(nineX)}}style={{width: '34px', fontSize: '14px'}}>9x</button>
        <button value={"10x Table"} onClick={function(e){ handleFilterChange(e); filterFacts(tenX)}}style={{paddingLeft: '2px',width: '36px', fontSize: '14px'}}>10x</button>
      </div>
      <div>
        <button value={"All Facts"} onClick={function(e){ handleFilterChange(e); filterFacts(allX)}} style={{width: '87px', fontSize: '14px'}}>ALL FACTS</button>      
        <button value={"My Toughest Facts"} onClick={function(e){ handleFilterChange(e); fetchToughFacts()}}style={{width: '140px', fontSize: '14px'}}>My Toughest Facts</button>
      </div>
     
      {whichFacts?
      <h1 style={{margin: '10px'}}>{whichFacts}</h1>
      :
      <h1>Select Times Table</h1>
}
    </div>
  )
}

export default FactFilter