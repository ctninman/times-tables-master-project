function FactCard ({fact}) {
  return (
    <h1>{fact.problem.multiplication_fact} = {fact.problem.answer}</h1>
  )
}

export default FactCard