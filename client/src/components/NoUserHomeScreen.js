import {useState} from 'react'
import LoadScreen from './LoadScreen'
import BackDrop from '..//images/canvabackground.png'

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
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '-10px', marginTop: '0px'}}>
      <div className='button-holder'style={{backgroundImage: `url(${BackDrop})`}}>
      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleWhyLearnButton(!toggleWhyLearnButton)}
        }
        >WHY LEARN THE TIMES TABLES?
      </button>
      </div>
      <div className='button-holder'style={{backgroundImage: `url(${BackDrop})`}}>
      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleHowToBecomeButton(!toggleHowToBecomeButton)}
        }
        >HOW CAN I BECOME A MASTER?
      </button>
      </div>
      <div className='button-holder'style={{backgroundImage: `url(${BackDrop})`}}>
      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleWhyCreateButton(!toggleWhyCreateButton)}
        }
        >WHY CREATE AN ACCOUNT?
      </button>
      </div>
      <div className='button-holder'style={{backgroundImage: `url(${BackDrop})`}}>
      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleStudentButton(!toggleStudentButton)}
        }
        >WHAT CAN I DO WITH MY STUDENT ACCOUNT?
      </button>
      </div>
      <div className='button-holder'style={{backgroundImage: `url(${BackDrop})`}}>
      <button
        className='home-screen-button'
        onClick={() => {
          setAllTogglesFalse()
          setToggleTeacherButton(!toggleTeacherButton)}
        }
        >WHAT CAN I DO WITH MY TEACHER ACCOUNT?
      </button>
      </div>
      </div>

      <div>
        {toggleWhyCreateButton 
          ? 
        <div className='home-div'>
          <h1 className='home-one'>With a student account, you will be able quiz yourself on whichever times table you choose.</h1>
          <h1 className='home-two'>If you answer correctly, your mastery level will go up. Answer incorrectly and it will go down.</h1>
          <h1 className='home-three'>Focus on one times table or rule at a time, and master that.</h1>
          <h1 className='home-four'>TIMES TABLES MASTERS will keep track of how well you know each fact, and you can see which facts you've mastered, and which ones need the most work in the "My Times Tables" and "Dashboard" sections.</h1> 
        </div>
          : 
        null}
        

        {toggleWhyLearnButton 
          ? 
        <div className='home-div'>
          <h1 className='home-one'>Here are some of the things you have waiting for you in the next years of your mathematical future: </h1>
          <h2 className='home-two'>MULTI-DIGIT MULTIPLICATION, LONG DIVISION, REDUCING FRACTIONS</h2>
          <h1 className='home-three'>All of these will use several multiplication facts for solving each problem. It is easy to lose your place if you need to pause and think about what 7 x 8, or another fact, equals.</h1>
          <h1 className='home-four'>THE SINGLE MOST IMPORTANT FACTOR IN SUCCEEDING IN MATH GOING FORWARD IS TO HAVE ALL YOUR MULTIPLICATION FACTS MEMORIZED!</h1>
        </div>
          : 
        null}

        {toggleTeacherButton 
          ? 
        <div className='home-div'>
          <h1 className='home-one'>Use the "Rules" to teach your students how to systemically conquer their times tables.</h1>
          <h2 className='home-two'>Create your classrooms and add students. You can adjust the amount of time each individual student has to solve based on their needs. Keep track of students that could use your support.</h2>
          <h1 className='home-three'>In your "Dashboard", check on each student's overall mastery of their times tables, and see which facts they should work on next.</h1>
          <h1 className='home-four'>See which facts each student struggles with, ones they've answered many times, but without much success. Tailor individualized instruction to match each student's needs.</h1>
        </div>
          : 
        null}

        {toggleStudentButton 
          ? 
        <div className='home-div'>
          <h1 className='home-one'>TIMES TABLES MASTER will let you know which facts you know already, so you can focus your powers on the few facts you  still need to learn.</h1>
          <h2 className='home-two'>Select which times table you want to work on, and take the quizzes.</h2>
          <h1 className='home-three'>Go to "My Times Tables". The lighter the color of the number, the more of a master you are!</h1>
          <h1 className='home-four'>Check your "Dashboard". You'll see each multiplication fact organized by how well you've mastered it.</h1>
        </div>
          : 
        null}

        {toggleHowToBecomeButton 
          ? 
        <div className='home-div'>
          <h1 className='home-one'>Here on TIMES TABLES MASTER, you can start by learning 8 simple rules (and a few other tricks) which will cover all 100 multiplication facts.</h1>
          <h2 className='home-two'>These rules will help you realize that learning all your times tables is much easier that it seems.</h2>
          <h2 className='home-three'>Ask anyone who's really good at something how they got so good. I guarantee their answer will be: PRACTICE!</h2>
          <h2 className='home-four'>With an account, you can learn which multiplication facts are the hardest for you and make sure you spend extra time practicing those facts.</h2>
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