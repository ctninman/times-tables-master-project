import GridSquare from './GridSquare'

function Grid ({allFacts, user}) {
  return (
    <div className='grid'>
      {allFacts.map((fact) => (
        <GridSquare style={{width: '9%'}} key={fact.fact_number} fact={fact} user={user}/>
      )) }
    </div>  
  )
}

export default Grid