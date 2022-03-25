import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "./UserContext"

function NavBar() {

  const {user} = useContext(UserContext)

    // *** JSX *** //
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#022873'}}> 
      
        <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', marginTop: '10px', flexWrap: 'wrap'}}>
          <NavLink
            to='/'
            exact
            className='home-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            Home
          </NavLink>
          <NavLink
            to='/multiplication-rules'
            exact
            className='rules-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            Multiplication Rules
          </NavLink>
          <NavLink
            to='/my-times-tables'
            exact
            className='my-times-table-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            My Times Tables
          </NavLink>
          <NavLink
            to='/quizzes'
            exact
            className='quizzes-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            Quiz
          </NavLink>
          <NavLink
            to='/student-dashboard'
            exact
            className='student-dash'
            activeStyle={{background: "#FB7498"}}
          >
            Dashboard
          </NavLink>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', flexGrow: '1', flexWrap: 'wrap', justifyContent: 'center'}}>
          <h1 
            style={{fontSize: '50px', color: 'white', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px'}}
            >Times Tables Master
          </h1>
        </div>
        
        <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10px', flexWrap: 'wrap'}}>
          <div style={{width: '75px'}}></div>
          <button className='login-button' onClick={() => console.log('signin')}>Sign In</button>
          <button className='login-button' 
            onClick={() => {
              console.log(user)}}
            >Sign Out
          </button>
        </div>

    </div>
  )
}

export default NavBar