import {useState} from "react"
import {useHistory} from 'react-router-dom'

function LoginForm ({username, setUsername, password, setPassword, teacherLogin, setTeacherLogin, setUser, user, setIsTeacher}) {

  let history = useHistory()

    function handleLogin (event) {
      event.preventDefault()
      setPassword("")
      setUsername("")
      // setIsLoading(true);
      
      if (teacherLogin === false) {
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => {
              setUser(user)
              setIsTeacher(false)
              history.push('/')
            });
          }
        })
      } else {
        fetch("/login-teacher", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => {
              setUser(user)
              setIsTeacher(true)
              history.push('/')
            })
          }
        })
      }
    }
  
    return (
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="is-teacher">I am a teacher</label>
        <input
          type="checkbox"
          id="is-teacher"
          checked={teacherLogin}
          onChange={() => setTeacherLogin(!teacherLogin)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }



  // function handleChange (event) {
  //   setUsername(event.target.value)
  // }

  // function handlePasswordChange (event) {
  //   setPassword(event.target.value)
  // }

  // function clogUser () {
  //   console.log(user)
  // }

  // return (
  //   <>
  //   <form onSubmit={handleLogin}>
  //     <input type='text' onChange={handleChange}></input>

  //     <input type='text' onChange={handlePasswordChange}></input>

  //     <button>Login</button>

      
  //   </form>
  //   <button onClick={clogUser}>User</button>
  //   </>

  // )
// }

export default LoginForm