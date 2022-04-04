import GridSquare from './GridSquare'
import MatteoGridSquare from './MatteoGridSquare'
import {useContext} from 'react'
import {UserContext} from './UserContext'

function MatteoGrid () {

  const {allFacts} = useContext(UserContext)

  return allFacts ? (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div className='grid'>
      {allFacts.map((fact) => (
        <MatteoGridSquare style={{width: '9%'}} key={fact.fact_number} fact={fact}/>
      )) }
    </div>
    </div>  
  )
  :
  null
}

export default MatteoGrid