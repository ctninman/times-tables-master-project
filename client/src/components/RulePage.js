import {useEffect, useState} from 'react'
import SingleExplanation from './SingleExplanation'

function RulePage ({allRules}) {

  // const [allRules, setAllRules] = useState([])
  const [currentRuleNumber, setCurrentRuleNumber] = useState(1)
  const [singleRule, setSingleRule] = useState(allRules.find((oneRule) => oneRule.rule_number == currentRuleNumber))
  const [showRelatedFacts, setShowRelatedFacts] = useState(true)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowRelatedFacts(showRelatedFacts => !showRelatedFacts)
  //     console.log(showRelatedFacts)
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);


  useEffect (() => {
    setSingleRule(allRules.find((oneRule) => oneRule.rule_number == currentRuleNumber))
  }, [currentRuleNumber])
  
  function handleRuleChange (event) {
    setCurrentRuleNumber(event.target.value)
    setSingleRule(allRules.find((oneRule) => oneRule.rule_number == event.target.value))
    console.log(event.target.value)
  }

  return (
    <div>
      <button onClick={() => console.log(singleRule)}>SRULE</button>
      <div>
        {allRules.map((rule) => (
          <button 
            key={rule.rule_number}
            value={rule.rule_number}
            onClick={handleRuleChange}
          >{rule.rule_title}
          </button>
        ))}
      </div>
      {singleRule 
        ?
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div>
          <h1 style={{backgroundColor: 'lightgreen'}}>{singleRule.rule_title} : {singleRule.rule}</h1>
        </div>
        <div>
          {singleRule.explanation.map((explanation) => (
            <SingleExplanation key={explanation} explanation={explanation}/>
          ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{showRelatedFacts === true ?
          <img onClick={() => setShowRelatedFacts(() => !showRelatedFacts)}src={singleRule.grid_photo} alt={singleRule.rule} className='grid-photo'/>
        :
          <img onClick={() => setShowRelatedFacts(() =>!showRelatedFacts)}src={"https://storage.cloud.google.com/times-tables-master_photos/Screen%20Shot%202022-03-25%20at%2011.26.09%20PM.png"} alt={singleRule.rule} className='grid-photo'/>} 
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <h1 style={{backgroundColor: 'pink'}}>{singleRule.related_facts} = </h1>
          <h2 style ={{backgroundColor: 'orange'}}>Number of facts learned through this rule</h2>
          <button onClick={() => setShowRelatedFacts(!showRelatedFacts)}>See which facts</button>
        </div>
        </div>
          {singleRule.additional_explanation.map((additional_explanation) => (
              <SingleExplanation key={additional_explanation} explanation={additional_explanation} />
          ))}
        
      </div>
      :
      null}
    </div>
  )
}

export default RulePage