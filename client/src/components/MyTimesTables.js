import Grid from "./Grid"
import NoUserTimesTables from "./NoUserTimesTables"

function MyTimesTables ({allFacts, user}) {
  
  const colorSquaresArray = [0,1,2,3,4,5,6,7,8,9,10]

  return user ? (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1 style={{textAlign: 'center'}}>My Times Tables</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '5px'}}>
        <h3 style={{width: '90px', textAlign: 'center'}}>Beginner</h3>
        <div style={{display: 'flex', flexDirection: 'row', border: '3px solid', borderRadius: '5px', width: '60%'}}>
          {colorSquaresArray.map((color) => <div className='mastery-color' id={`color-${color}`} ><h2 style={{marginTop: '10px', marginBottom: '3px', textAlign: 'center'}}>{color}</h2></div>)}
        </div>
        <h3 style={{width: '90px', textAlign: 'center'}}>Master</h3>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
       <Grid allFacts={allFacts} user={user}/>
      </div>
    </div>
  )
    :
  <NoUserTimesTables allFacts={allFacts}/>
}

export default MyTimesTables