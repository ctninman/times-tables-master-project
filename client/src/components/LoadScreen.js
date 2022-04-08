import {useState, useEffect} from 'react'

function LoadScreen () {

  let difficultFacts = ["8 x 6 = 48", "8 x 7 = 56", "8 x 8 = 64", "8 x 8 = 72", "6 x 6 = 36", "6 x 7 = 42", "6 x 8 = 48", "6 x 9 = 54", "7 x 6 = 42", "7 x 7 = 49", "7 x 8 = 56", "7 x 9 = 63", "9 x 6 = 54", "9 x 7 = 63", "9 x 8 = 72", "9 x 9 = 81"]

  const [loadingFact, setLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [secondLoadingFact, setSecondLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [thirdLoadingFact, setThirdLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [fourthLoadingFact, setFourthLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [fifthLoadingFact, setFifthLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [sixthLoadingFact, setSixthLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [seventhLoadingFact, setSeventhLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [eighthLoadingFact, setEighthLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  const [ninthLoadingFact, setNinthLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setSecondLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setThirdLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setFourthLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setFifthLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setSixthLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setSeventhLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setEighthLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
      setNinthLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{backgroundImage: 'linear-gradient(to bottom right, #AC92EB, #4FC1E8', marginRight: '100px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{sixthLoadingFact}</h2>
        </div>
        <div style={{backgroundImage: 'linear-gradient(to bottom left, #AC92EB, #4FC1E8', marginLeft: '100px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{seventhLoadingFact}</h2>
        </div>
      </div>
     
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{backgroundImage: 'linear-gradient(to bottom right, #4FC1E8, #A0D568', marginRight: '20px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{loadingFact}</h2>
        </div>
        <div style={{backgroundImage: 'linear-gradient(to bottom left, #4FC1E8, #A0D568', marginLeft: '20px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{secondLoadingFact}</h2>
        </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{backgroundImage: 'radial-gradient(#FFCE54, #A0D568)', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{thirdLoadingFact}</h2>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{backgroundImage: 'linear-gradient(to bottom left, #A0D568, #4FC1E8', marginRight: '20px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{fourthLoadingFact}</h2>
        </div>
        <div style={{backgroundImage: 'linear-gradient(to bottom right, #A0D568, #4FC1E8', marginLeft: '20px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{fifthLoadingFact}</h2>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{backgroundImage: 'linear-gradient(to bottom left, #A0D568, #4FC1E8', marginRight: '100px', borderRadius: '45%'}}>  
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{eighthLoadingFact}</h2>
        </div>
        <div style={{backgroundImage: 'linear-gradient(to bottom right, #A0D568, #4FC1E8', marginLeft: '100px', borderRadius: '45%'}}>
          <h2 style={{paddingLeft: '15px', paddingRight: '15px'}}>{ninthLoadingFact}</h2>
        </div>
      </div>

    </div>
  )
}

export default LoadScreen
