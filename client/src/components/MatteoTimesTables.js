import MatteoGrid from "./MatteoGrid"

function MatteoTimesTables ({allFacts}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}>
      <MatteoGrid allFacts={allFacts}/>
    </div>
  )
}

export default MatteoTimesTables