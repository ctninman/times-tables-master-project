function FactCard ({fact}) {
  return (
    <div style={{backgroundColor: 'white', width: '118px', margin: '5px', padding: '5px', marginTop: '5px', borderRadius: '45%'}}>
      <h3 style={{margin: '3px', textAlign: 'center'}}>{fact.problem.multiplication_fact} = {fact.problem.answer}</h3>
    </div>
  )
}

export default FactCard