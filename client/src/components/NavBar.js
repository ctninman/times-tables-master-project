import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "./UserContext"
import {useHistory} from "react-router-dom"
import siteLogo from '../images/canvaLogo.png'

function NavBar({isTeacher, setIsTeacher}) {

  const {user, setUser} = useContext(UserContext)

  let history = useHistory()

  function handleSignOut () {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        history.push('/')
        setUser(null);
      }
    });
  }

    // *** JSX *** //
  return (
    <div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white'}}> 
      
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5px', width: '360px', marginBottom: '0px'}}>
          <NavLink
            to='/'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            Home
          </NavLink>
          <NavLink
            to='/multiplication-rules'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            Multiplication Rules
          </NavLink>
          <NavLink
            to='/my-times-tables'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            My Times Tables
          </NavLink>
          <NavLink
            to='/quizzes'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            Quiz
          </NavLink>
          {isTeacher === false 
            ?
          <NavLink
            to='/student-dashboard'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            Dashboard
          </NavLink>
            :
            <NavLink
            to='/teacher-dashboard'
            exact
            className='nav-bar'
            activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
          >
            Dashboard
          </NavLink>
          }
        </div>


        
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'right', justifyContent: 'right', marginTop: '5px', textAlign: 'right', flexWrap: 'wrap'}}>
          {/* <div style={{width: '75px'}}> */}
            {user ?
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <h5 style={{marginBottom: '2px', marginTop: '5px', marginRight: '5px'}}>Hi, {user.username}</h5>
            </div>
            :
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <NavLink
                to='/user-login'
                exact
                className='nav-bar'
                activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
              >
                Login
              </NavLink>
            </div>
            }
          
          {user ?
          null:
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>  
            <NavLink
              to='/user-signup'
              exact
              className='nav-bar'
              activeStyle={{background: "#4FC1E8", textDecoration: 'underline'}}
            >
              Sign Up
            </NavLink>
          </div>
          }
          {user
          ?
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className='nav-bar' 
              style={{marginTop: '0px'}}
              onClick={handleSignOut}
              >Sign Out
            </button>
          </div>
          :
          null}
        </div>

        </div>

        <div style={{display: 'flex', flexDirection: 'row', width: '100%',marginTop: '2px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {/* <h2 
            style={{fontSize: '40px', fontWeight: 'bolder', color: '#AC92EB', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px', marginTop: '0px'}}
            >TIMES TABLES MASTER
          </h2> */}
          <img style={{width: '35%'}}src={siteLogo}/>
        </div>

    </div>
  )
}

export default NavBar