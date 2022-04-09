function FactCard ({fact}) {
  return (
    <div className='dashboard-fact' style={{backgroundColor: 'white', width: '135px', height: '35px', paddingBottom: '2px',paddingTop:'8px',margin: '5px', marginTop: '5px', borderRadius: '45%'}}>
      <h3 style={{margin: '3px', textAlign: 'center'}}>{fact.multiplication_fact} = {fact.answer}</h3>
    </div>
  )
}

export default FactCard