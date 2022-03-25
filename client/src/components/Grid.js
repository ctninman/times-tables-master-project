import GridSquare from './GridSquare'
import { useContext } from "react"
import {UserContext} from "./UserContext"

function Grid ({allFacts}) {

  const {user} = useContext(UserContext)

  return (
    <div className='grid'>
      {allFacts.map((fact) => (
        <GridSquare style={{width: '9%'}} key={fact.fact_number} fact={fact}/>
      )) }
    </div>  
  )
}

export default Grid