import {useState} from 'react'
import LoadScreen from './LoadScreen'

function NoUserHomeScreen () {

  const [toggleTeacherButton, setToggleTeacherButton] =useState(false)
  const [toggleStudentButton, setToggleStudentButton] =useState(false)
  const [toggleWhyCreateButton, setToggleWhyCreateButton] =useState(false)
  const [toggleWhyLearnButton, setToggleWhyLearnButton] =useState(false)
  const [toggleHowToBecomeButton, setToggleHowToBecomeButton] =useState(false)

  function setAllTogglesFalse () {
    setToggleWhyCreateButton(false)
    setToggleWhyLearnButton(false)
    setToggleHowToBecomeButton(false)
    setToggleStudentButton(false)
    setToggleTeacherButton(false)
  }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>

      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleWhyLearnButton(!toggleWhyLearnButton)}
        }
        // onMouseLeave={() => setToggleWhyLearnButton(false)}
        >Why Learn the Times Tables?
      </button>
      <button
        className='home-screen-button'
        onClick={() => setToggleHowToBecomeButton(!toggleHowToBecomeButton)}
        // onMouseLeave={() => setToggleHowToBecomeButton(false)}
        >How Can I Become a Master?
      </button>
      <button
        className='home-screen-button'
        onClick={() => setToggleWhyCreateButton(!toggleWhyCreateButton)}
        // onMouseLeave={() => setToggleWhyCreateButton(false)}
        >Why Create an Account?
      </button>
      <button
        className='home-screen-button'
        onClick={() => setToggleStudentButton(!toggleStudentButton)}
        // onMouseLeave={() => setToggleStudentButton(false)}
        >What Can I Do With My Student Account?
      </button>
      <button
        className='home-screen-button'
        onClick={() => setToggleTeacherButton(!toggleTeacherButton)}
        // onMouseLeave={() => setToggleTeacherButton(false)}
        >What Can I Do With My Teacher Account?
      </button>

      </div>

      <div>
        {toggleWhyCreateButton 
          ? 
        <div>  
          <h1>Why Should I Create An Account?</h1> 
        </div>
          : 
        null}
        

        {toggleWhyLearnButton 
          ? 
        <div>
          <h1>Here are some of the things you have waiting for you in the next years of your mathematical future: </h1>
          <h2 style={{paddingLeft: '20px'}}>MULTI-DIGIT MULTIPLICATION, LONG DIVISION, REDUCING FRACTIONS</h2>
          <h1>All of these will use several multiplication facts for solving each problem. It is easy to lose your place if you need to pause and think about what 7 x 8, or another fact, equals.</h1>
          <h1 style={{paddingLeft: '20px', fontSize: '35px'}}>THE SINGLE MOST IMPORTANT FACTOR IN SUCCEEDING IN MATH GOING FORWARD IS TO HAVE ALL YOUR MULTIPLICATION FACTS MEMORIZED!</h1>
        </div>
          : 
        null}

        {toggleTeacherButton 
          ? 
        <div>
          <h1>What Can I Do With My Teacher Account?</h1> 
        </div>
          : 
        null}

        {toggleStudentButton 
          ? 
        <div>
          <h1>With a student account, you will be able quiz yourself on whichever times table you choose.</h1>
          <h1>If you answer correctly, your mastery level will go up. Answer incorrectly and it will go down.</h1>
          <h1>Focus on one times table or rule at a time, and master that.</h1>
          <h1>TIMES TABLES MASTERS will keep track of how well you know each fact, and you can see which facts you've mastered, and which ones need the most work in the "My Times Tables" and "Dashboard" sections.</h1> 
        </div>
          : 
        null}

        {toggleHowToBecomeButton 
          ? 
        <div>
          <h1>Here on TIMES TABLES MASTER, you can start by learning 8 simple rules (and a few other tricks) which will cover all 100 multiplication facts.</h1>
          <h2>There rules will help you realize that learning all your times tables is much easier that it seems.</h2>
          <h2>Ask anyone who's really good at something how they got so good. I guarantee their answer will be: PRACTICE!</h2>
          <h2>With an account, you can learn which multiplication facts are the hardest for you and make sure you spend extra time practicing those facts.</h2>
        </div>
          : 
        null}

        {!toggleWhyCreateButton && !toggleWhyLearnButton && !toggleStudentButton && !toggleTeacherButton && !toggleHowToBecomeButton 
          ?
        <LoadScreen />
          :
        null
        }
      </div>

    
    </>
    
  )
}

export default NoUserHomeScreen