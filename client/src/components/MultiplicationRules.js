import {useState, useEffect} from 'react'
import RulePage from './RulePage'

function MultiplicationRules () {

 const [allRules, setAllRules] = useState([])
 const [currentRule, setCurrentRule] = useState({})
 const [currentRuleNumber, setCurrentRuleNumber] = useState(1)



  useEffect (() => {
    fetch('/rules')
    .then(res => res.json())
    .then(data => {
      setAllRules(data)
      setCurrentRule(data.find((rule) => rule.rule_number === currentRuleNumber))
    })
  }, [] )

  return (
    <>
      <RulePage singleRule={currentRule}/>
      <button onClick={() => console.log(currentRule)} >Rules</button>
    </>
  )
}

export default MultiplicationRules