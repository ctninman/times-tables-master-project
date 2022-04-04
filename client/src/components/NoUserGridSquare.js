import {useState} from 'react'

function NoUserGridSquare ({fact}) {

  const [toggleShowAnswer, setToggleShowAnswer] = useState(false)

  return (
      toggleShowAnswer === false 
        ? 
    <div 
      className='grid-square' 
      style={{backgroundColor: '#ED5564', display: 'inline-block',flexDirection: 'column'}}
      // onMouseEnter={() => setToggleShowAnswer(true)}
      // onMouseLeave={() => setToggleShowAnswer(false)}
      onClick={() => setToggleShowAnswer(!toggleShowAnswer)}
      >
      <h2 className='grid-fact-no-user' style={{backgroundColor: 'transparent', color: 'black', fontWeight: 'bold'}}  >{fact.answer}</h2>
      <h5 className='grid-mastered' style={{ color: 'black'}}>{fact.multiplication_fact}</h5>
    </div>
      :
      <div 
        className='grid-square' 
        style={{backgroundColor: '#FFCE54', display: 'inline-block',flexDirection: 'column'}} 
        // onMouseEnter={() => setToggleShowAnswer(true)}
        // onMouseLeave={() => setToggleShowAnswer(false)}
        onClick={() => setToggleShowAnswer(!toggleShowAnswer)}
        >
      <h2 className='grid-fact-no-user' style={{backgroundColor: 'transparent', color: 'black'}} >{fact.answer}</h2>
      <h5 className='grid-mastered' style={{ color: 'black'}}>{fact.multiplication_fact}</h5>
    </div>
   
  ) 
}

export default NoUserGridSquare