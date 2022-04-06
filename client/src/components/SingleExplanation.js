
function SingleExplanation ({explanation}) {
  return (
    <div style={{marginLeft: '10%', marginRight: '10%',  display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
      <h2 style={{
        margin: '10px',
        width: 'fit-content',
        height: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        fontSize: '30px',
        borderRadius: '25px',
        backgroundImage: 'linear-gradient(to bottom left, #AC92EB88, #4FC1E888)',
        }}>{explanation}
      </h2>
    </div>
  )
}

export default SingleExplanation