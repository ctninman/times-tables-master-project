import {useState} from "react"
import {useHistory} from 'react-router-dom'

function LoginForm ({username, setUsername, password, setPassword, teacherLogin, setTeacherLogin, setUser, user, setIsTeacher}) {

  let history = useHistory()

  const [errors, setErrors] = useState(false)

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
          } else {
            setErrors(true)
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
          }   else {
            setErrors(true)
          }
        })
      }
    }
  
    return (
      <>
        <form onSubmit={handleLogin}>
          <div style={{marginLeft: '20px'}}>
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
          </div>
          <div style={{marginLeft: '20px'}}>
            <label htmlFor="is-teacher">I am a teacher</label>
            <input
              type="checkbox"
              id="is-teacher"
              checked={teacherLogin}
              onChange={() => setTeacherLogin(!teacherLogin)}
            />
          </div>
          <button style={{margin: '20px', fontSize: '15px'}} type="submit">Submit</button>
        </form>
        {errors ? <h1>Incorrect Login Information</h1>: null}
      </>
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