import {useState} from 'react'

function MatteoGridSquare ({fact}) {

  const [toggleShowAnswer, setToggleShowAnswer] = useState(false)

  const matteoArray = [1,2,3,4,5,6,7]

  return (
      toggleShowAnswer === false 
        ? 
    <div 
      className='grid-square' 
      id={`matteo-${matteoArray[Math.floor(Math.random()*matteoArray.length)]}`}
      style={{ display: 'inline-block',flexDirection: 'column'}}
      onClick={() => setToggleShowAnswer(!toggleShowAnswer)}
      >
      {toggleShowAnswer ? <h2 className='grid-fact-no-user' style={{backgroundColor: 'transparent', color: 'black', fontWeight: 'bold'}}  >{fact.answer}</h2> :
      <h5 className='grid-mastered' style={{ color: 'black'}}>{fact.multiplication_fact}</h5>}
    </div>
      :
      <div 
        className='grid-square' 
        id={`matteo-${matteoArray[Math.floor(Math.random()*matteoArray.length)]}`}
        style={{ display: 'inline-block',flexDirection: 'column'}} 
        onClick={() => setToggleShowAnswer(!toggleShowAnswer)}
        >
      {toggleShowAnswer ? <h2 className='grid-fact-no-user' style={{backgroundColor: 'transparent', color: 'black'}} >{fact.answer}</h2> :
      <h5 className='grid-mastered' style={{ color: 'black'}}>{fact.multiplication_fact}</h5>}
    </div>
   
  ) 
}

export default MatteoGridSquare