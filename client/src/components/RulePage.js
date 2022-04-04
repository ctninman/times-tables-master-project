import {useEffect, useState, useRef} from 'react'
import LoadScreen from './LoadScreen'
import SingleExplanation from './SingleExplanation'

function RulePage ({allRules, singleRule, setSingleRule, currentRuleNumber, setCurrentRuleNumber}) {

  // const [allRules, setAllRules] = useState([])
  // const [currentRuleNumber, setCurrentRuleNumber] = useState(0)
  // const [singleRule, setSingleRule] = useState(allRules.find((oneRule) => oneRule.rule_number == currentRuleNumber))
  const [showRelatedFacts, setShowRelatedFacts] = useState(true)

  const scollToRef = useRef();

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

  function handleNextRule () {
    scollToRef.current.scrollIntoView()
    if (currentRuleNumber < 9) {
      setCurrentRuleNumber(currentRuleNumber +1)
    }
    else {
      setCurrentRuleNumber(0)
    }
  }

  return singleRule ? (
    <div ref={scollToRef}>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {allRules.map((rule) => (
          <button 
            key={rule.rule_number}
            value={rule.rule_number}
            onClick={handleRuleChange}
            style={{fontSize: '14px'}}
          >{rule.rule_title.toUpperCase()}
          </button>
        ))}
      </div>
      {singleRule 
        ?
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style={{padding: '8px', marginLeft: '15px', width: '120px', fontWeight: 'bolder', height: '80px',textAlign: 'center', fontSize: '40px', color: 'black',textShadow: '2px 2px 2px #4FC1E8'}}>{singleRule.rule_title.toUpperCase()}:</h1>
          <h1 style={{padding: '5px',backgroundImage: 'linear-gradient(to bottom right, #4FC1E8, #A0D568, #4FC1E8)', marginLeft: '15px',borderRadius: '5px', width: '75%', textShadow: '2px 2px 2px #AC92EB'}}>{singleRule.rule}</h1>
        </div>
        <div style={{textAlign: 'center'}}>
          {singleRule.explanation.map((explanation) => (
            <SingleExplanation key={explanation} explanation={explanation}/>
          ))}
        </div>
        <div style={{textAlign: 'center'}}>
          
          {showRelatedFacts === true 
            ?
          <div>
            <img onClick={() => setShowRelatedFacts(() => !showRelatedFacts)}src={singleRule.grid_photo} alt={singleRule.rule} className='grid-photo'/>
          </div>
        :
        <div>
          <img onClick={() => setShowRelatedFacts(() =>!showRelatedFacts)}src={"https://storage.googleapis.com/times-tables-master_photos/NoTimes.png"} alt={singleRule.rule} className='grid-photo'/>
        </div>
        } 
        <button onClick={() => setShowRelatedFacts(!showRelatedFacts)}>{showRelatedFacts? "Hide Facts" : "See Facts"}</button>
        
        </div>
        <div style={{textAlign: 'center'}}>
          {singleRule.additional_explanation.map((additional_explanation) => (
              <SingleExplanation key={additional_explanation} explanation={additional_explanation} />
          ))}
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style={{padding: '5px',backgroundImage: 'linear-gradient(#A0D568, #4FC1E8', marginLeft: '15px',borderRadius: '5px', width: 'auto', textShadow: '2px 2px 2px #AC92EB'}}>Number of facts learned through this rule: </h1>
          <h1 style={{paddingTop: '4px', backgroundColor: '#FFCE54', marginLeft: '15px', borderRadius: '50%', width: '75px', height: 'auto',textAlign: 'center', fontSize: '40px',textShadow: '2px 2px 2px #4FC1E8'}}>{singleRule.related_facts}</h1>
        </div>
        <div style={{marginBottom: '15px', textAlign: 'center'}}>
          <button onClick={handleNextRule}>Next Rule</button>
        </div>
      </div>
      :
      null}
    </div>
  )
  :
  <LoadScreen />
}

export default RulePage