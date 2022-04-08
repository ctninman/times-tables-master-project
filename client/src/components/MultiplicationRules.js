import {useState, useEffect, useRef} from 'react'
import LoadScreen from './LoadScreen';
import RulePage from './RulePage'

function MultiplicationRules () {

  const firstUpdate = useRef(true);

  const [allRules, setAllRules] = useState(null)
  const [currentRuleNumber, setCurrentRuleNumber] = useState(0)
  const [singleRule, setSingleRule] = useState(null)


  useEffect (() => {
    fetch('/rules')
    .then(res => res.json())
    .then(data => {
      setAllRules(data)
    })
  }, [] )

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('in that effect', allRules)
    setSingleRule(allRules.find((rule) => rule.rule_number === 0))
  }, [allRules])

  return singleRule ? (
    <>
      <RulePage allRules={allRules}
        currentRuleNumber={currentRuleNumber}
        setCurrentRuleNumber={setCurrentRuleNumber}
        singleRule={singleRule}
        setSingleRule={setSingleRule}/>

    </>
  )
  :
  <LoadScreen />
}

export default MultiplicationRules