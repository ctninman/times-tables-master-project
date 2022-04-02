import GridSquare from './GridSquare'
import NoUserGridSquare from './NoUserGridSquare'

function NoUserGrid ({allFacts}) {

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