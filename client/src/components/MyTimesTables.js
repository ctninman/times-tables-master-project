import Grid from "./Grid"

function MyTimesTables ({allFacts, user}) {
  
  return (
    <div>
      <div>
        <h1>My Times Tables Mastery</h1>
        
      </div>
      <Grid allFacts={allFacts} user={user}/>
    </div>
  )
}

export default MyTimesTables