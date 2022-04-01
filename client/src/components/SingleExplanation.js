function SingleExplanation ({explanation}) {
  return (
    <div style={{marginLeft: '10%', marginRight: '10%'}}>
      <button style={{
        border: '3px solid', 
        marginLeft: '10px', 
        marginRight: '10px',
        width: 'auto',
        height: 'auto',
        padding: '3px',
        fontSize: '30px',
        borderRadius: '5px'}}>{explanation}</button>
    </div>
  )
}

export default SingleExplanation