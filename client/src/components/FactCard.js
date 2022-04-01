function FactCard ({fact}) {
  return (
    <div style={{backgroundColor: 'white', width: '115px', margin: '5px', padding: '5px', marginTop: '5px', borderRadius: '5px'}}>
      <h3 style={{margin: '3px'}}>{fact.problem.multiplication_fact} = {fact.problem.answer}</h3>
    </div>
  )
}

export default FactCard