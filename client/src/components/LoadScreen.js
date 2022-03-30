import {useState, useEffect} from 'react'

function LoadScreen () {

  let difficultFacts = ["8 x 6 = 48", "8 x 7 = 56", "8 x 8 = 64", "8 x 8 = 72", "6 x 6 = 36", "6 x 7 = 42", "6 x 8 = 48", "6 x 9 = 54", "7 x 6 = 42", "7 x 7 = 49", "7 x 8 = 56", "7 x 9 = 63", "9 x 6 = 54", "9 x 7 = 63", "9 x 8 = 72", "9 x 9 = 81"]

  const [loadingFact, setLoadingFact] = useState(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingFact(difficultFacts[Math.floor(Math.random()*difficultFacts.length)])
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{loadingFact}</h1>
    </div>
  )
}

export default LoadScreen