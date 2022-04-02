import NoUserGrid from "./NoUserGrid"

function NoUserTimesTables ({allFacts}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}>
      <NoUserGrid allFacts={allFacts}/>
    </div>
  )
}

export default NoUserTimesTables