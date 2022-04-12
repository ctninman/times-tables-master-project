import GridSquare from './GridSquare'
import { useContext } from "react"
import {UserContext} from "./UserContext"

function Grid ({allFacts}) {

  const {user} = useContext(UserContext)

  return allFacts ? (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div className='grid'>
      {allFacts.map((fact) => (
        <GridSquare style={{width: '9%'}} key={fact.multiplication_fact + fact.fact_number} fact={fact}/>
      )) }
    </div>
    </div>  
  )
  :
  null
}

export default Grid