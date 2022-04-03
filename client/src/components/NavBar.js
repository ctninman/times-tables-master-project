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
    <div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white'}}> 
      
        <div style={{width: '60%', display: 'flex', flexDirection: 'row', marginTop: '10px', flexWrap: 'wrap', marginBottom: '0px'}}>
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

        <div style={{display: 'flex', flexDirection: 'row', width: '100%',marginTop: '2px', flexWrap: 'wrap', justifyContent: 'center'}}>
          <h2 
            style={{fontSize: '40px', color: 'black', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px', marginTop: '0px'}}
            >Times Tables Master
          </h2>
        </div>

    </div>
  )
}

export default NavBar