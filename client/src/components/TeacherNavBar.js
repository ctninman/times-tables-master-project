import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "./UserContext"
import {useHistory} from "react-router-dom"

function TeacherNavBar({isTeacher, setIsTeacher}) {

  const {user, setUser} = useContext(UserContext)

  let history = useHistory()

  function handleSignOut () {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        history.push('/')
        setUser(null);
        setIsTeacher(false)
      }
    });
  }

    // *** JSX *** //
  return user? (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#A0D568'}}> 
      
        <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', marginTop: '10px', flexWrap: 'wrap'}}>
          <NavLink
            to='/'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Home
          </NavLink>
          <NavLink
            to='/multiplication-rules'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Multiplication Rules
          </NavLink>
          <NavLink
            to='/the-times-tables'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB", textDecoration: 'underline'}}
          >
            Times Tables
          </NavLink>
          {/* <NavLink
            to='/my-times-tables'
            exact
            className='my-times-table-nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            My Times Tables
          </NavLink> */}
          {/* <NavLink
            to='/quizzes'
            exact
            className='quizzes-nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Quiz
          </NavLink>
          {isTeacher === false 
            ?
          <NavLink
            to='/student-dashboard'
            exact
            className='student-dash'
            activeStyle={{background: "#AC92EB"}}
          >
            Dashboard
          </NavLink> */}
            {/* : */}
            <NavLink
            to='/teacher-dashboard'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Dashboard
          </NavLink>
          {/* } */}
        </div>

        <div style={{display: 'flex', flexDirection: 'row', flexGrow: '1', flexWrap: 'wrap', justifyContent: 'center'}}>
          <h1 
            style={{fontSize: '50px', color: 'white', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px'}}
            >Times Tables Master
          </h1>
        </div>
        
        <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10px', flexWrap: 'wrap'}}>
          <div style={{width: '75px'}}></div>
          {/* <NavLink
            to='/user-login'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Login
          </NavLink>
          <NavLink
            to='/user-signup'
            exact
            className='nav-bar'
            activeStyle={{background: "#AC92EB"}}
          >
            Sign Up
          </NavLink> */}
          <h3>Hi {user.username}</h3>
          <button className='nav-bar' 
            onClick={handleSignOut}
            >Sign Out
          </button>
        </div>

    </div>
  )
  :
  null
}

export default TeacherNavBar