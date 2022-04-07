import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "./UserContext"
import {useHistory} from "react-router-dom"
import siteLogo from '../images/newCanvaLogo.png'

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
    <div style={{marginTop: '-15px', marginBottom: '0px'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginTop: '0px'}}> 
      
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '0px', width: '340px', marginBottom: '0px', marginLeft: '8px'}}>
          <NavLink
            to='/'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            HOME
          </NavLink>
          <h3 style={{fontSize: '11px', marginLeft: '8px', marginRight: '8px'}}>|</h3>
          <NavLink
            to='/multiplication-rules'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            RULES
          </NavLink>
          <h3 style={{fontSize: '11px', marginLeft: '8px', marginRight: '8px'}}>|</h3>
          <NavLink
            to='/my-times-tables'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            MY TABLES
          </NavLink>
          <h3 style={{fontSize: '11px', marginLeft: '8px', marginRight: '8px'}}>|</h3>
          <NavLink
            to='/quizzes'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            QUIZ
          </NavLink>
          <h3 style={{fontSize: '11px', marginLeft: '8px', marginRight: '8px'}}>|</h3>
          {isTeacher === false 
            ?
          <NavLink
            to='/student-dashboard'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            DASHBOARD
          </NavLink>
            :
            <NavLink
            to='/teacher-dashboard'
            exact
            className='nav-bar'
            activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
          >
            DASHBOARD
          </NavLink>
          }
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',alignContent: 'right', justifyContent: 'right', marginRight: '5px',textAlign: 'right', flexWrap: 'wrap'}}>
          {/* <div style={{width: '75px'}}> */}
            {user ?
                     <h5 
                     style={{fontSize: '12px', marginRight: '8px',width: 'auto', justifyContent: 'center', textDecoration: 'none'}}
                
                     >{user.username}
                   </h5>
            :
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <NavLink
                to='/user-login'
                exact
                className='nav-bar'
                activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
              >
                LOGIN
              </NavLink>
              <h5 className='nav-bar' 
                style={{fontSize: '12px',  justifyContent: 'center', marginRight: '8px', marginLeft: '8px'}}
                onClick={handleSignOut}
                >|
              </h5>
            </div>
            }
          
          {user ?
          null:
          // <div style={{display: 'flex', justifyContent: 'flex-end'}}>  
            <NavLink
              to='/user-signup'
              exact
              className='nav-bar'
              activeStyle={{color: '#AC92EB', textDecoration: 'underline'}}
            >
              SIGN UP
            </NavLink>
          // </div>
          }
          {user
          ?
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <h5 className='nav-bar' 
              style={{fontSize: '12px',  justifyContent: 'center'}}
              onClick={handleSignOut}
              >|
            </h5>
            <h5 className='nav-bar' 
              style={{fontSize: '12px', width: '70px', justifyContent: 'center', cursor: 'pointer'}}
              onClick={handleSignOut}
              >SIGN OUT
            </h5>
          </div>
          :
          null}
        </div>

        </div>

        <div style={{display: 'flex', flexDirection: 'row', width: '100%',marginTop: '2px', marginBottom: '0px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {/* <h2 
            style={{fontSize: '40px', fontWeight: 'bolder', color: '#AC92EB', textAlign: 'center', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px', marginTop: '0px'}}
            >TIMES TABLES MASTER
          </h2> */}
          <img style={{width: '35%', minWidth: '350px'}}src={siteLogo}/>
        </div>

    </div>
  )
}

export default NavBar