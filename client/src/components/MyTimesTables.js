import Grid from "./Grid"

function MyTimesTables ({allFacts, user}) {
  
  return (
    <div>
      <h1>My Times Tables</h1>
      <Grid allFacts={allFacts} user={user}/>
    </div>
  )
}

export default MyTimesTables