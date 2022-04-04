import GridSquare from './GridSquare'
import NoUserGridSquare from './NoUserGridSquare'
import {useContext} from 'react'
import {UserContext} from './UserContext'

function NoUserGrid () {

  const {allFacts} = useContext(UserContext)

  return allFacts ? (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div className='grid'>
      {allFacts.map((fact) => (
        <NoUserGridSquare style={{width: '9%'}} key={fact.fact_number} fact={fact}/>
      )) }
    </div>
    </div>  
  )
  :
  null
}

export default NoUserGrid