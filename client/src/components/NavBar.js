import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "./UserContext"
import {useHistory} from "react-router-dom"

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
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#A0D568'}}> 
      
        <div style={{width: '32%', display: 'flex', flexDirection: 'row', marginTop: '10px', flexWrap: 'wrap'}}>
          <NavLink
            to='/'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Home
          </NavLink>
          <NavLink
            to='/multiplication-rules'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Multiplication Rules
          </NavLink>
          <NavLink
            to='/my-times-tables'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            My Times Tables
          </NavLink>
          <NavLink
            to='/quizzes'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Quiz
          </NavLink>
          {isTeacher === false 
            ?
          <NavLink
            to='/student-dashboard'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Dashboard
          </NavLink>
            :
            <NavLink
            to='/teacher-dashboard'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Dashboard
          </NavLink>
          }
        </div>

        <div style={{display: 'flex', flexDirection: 'row', width: '32%', flexWrap: 'wrap', justifyContent: 'center'}}>
          <h1 
            style={{fontSize: '50px', color: 'white', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px'}}
            >Times Tables Master
          </h1>
        </div>
        
        <div style={{width: '32%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10px', flexWrap: 'wrap'}}>
          <div style={{width: '75px'}}></div>
          {user ?
           <h3>Hi, {user.username}</h3>
           :
            <NavLink
              to='/user-login'
              exact
              className='nav-bar'
              activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
            >
              Login
            </NavLink>
          }
          {user ?
          null:
          <NavLink
            to='/user-signup'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Sign Up
          </NavLink>
          }
          {user
          ?
          <button className='nav-bar' 
            onClick={handleSignOut}
            >Sign Out
          </button>
          :
          null}
        </div>

    </div>
  )
}

export default NavBar