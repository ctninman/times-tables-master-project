import {UserContext} from "./UserContext"
import {useContext} from 'react'

function FactFilter ({setFilteredQuestionList, filteredQuestionList}) {

  const {user} = useContext(UserContext)
  
  const allX = [...Array(101).keys()]
  allX.shift()
  const oneX = [1,2,3,4,5,6,7,8,9,10,11,21,31,41,51,61,71,81,91]
  const twoX = [11,12,13,14,15,16,17,18,19,20,2,12,32,42,52,62,72,82,92]
  const threeX = [21,22,23,24,25,26,27,28,29,30,3,13,33,43,53,63,73,83,93]
  const fourX = [31,32,33,34,35,36,37,38,39,40,4,14,24,44,54,64,74,84,94]
  const fiveX = [41,42,43,44,45,46,47,48,49,50,5,15,25,35,55,65,75,85,95]
  const sixX = [51,52,53,54,55,56,57,58,59,60,6,16,26,36,46,66,76,86,96]
  const sevenX = [61,62,63,64,65,66,67,68,69,70,7,17,27,37,47,57,77,87,97]
  const eightX = [71,72,73,74,75,76,77,78,79,80,8,18,28,38,48,58,68,88,98]
  const nineX = [81,82,83,84,85,86,87,88,89,90,9,19,29,39,49,59,69,79,99]
  const tenX = [91,92,93,94,95,96,97,98,99,100,10,20,30,40,50,60,70,80,90]

  function filterFacts (numberArray) {
    setFilteredQuestionList(user.masteries.filter((mastery) => numberArray.includes(mastery.problem.fact_number)))
  }

  return (
    <div>
    <button onClick={() => filterFacts(allX)} style={{width: '80px'}}>All Facts</button>      
    <button onClick={() => filterFacts(oneX)} style={{width: '40px'}}>1x</button>
    <button onClick={() => filterFacts(twoX)} style={{width: '40px'}}>2x</button>
    <button onClick={() => filterFacts(threeX)}style={{width: '40px'}}>3x</button>
    <button onClick={() => filterFacts(fourX)}style={{width: '40px'}}>4x</button>
    <button onClick={() => filterFacts(fiveX)}style={{width: '40px'}}>5x</button>
    <button onClick={() => filterFacts(sixX)}style={{width: '40px'}}>6x</button>
    <button onClick={() => filterFacts(sevenX)}style={{width: '40px'}}>7x</button>
    <button onClick={() => filterFacts(eightX)}style={{width: '40px'}}>8x</button>
    <button onClick={() => filterFacts(nineX)}style={{width: '40px'}}>9x</button>
    <button onClick={() => filterFacts(tenX)}style={{width: '40px'}}>10x</button></div>
  )
}

export default FactFilter