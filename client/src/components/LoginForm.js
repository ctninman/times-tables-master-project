import {useState} from "react"
import {useHistory} from 'react-router-dom'

function LoginForm ({username, setUsername, password, setPassword, teacherLogin, setTeacherLogin, setUser, setIsTeacher}) {

  let history = useHistory()

  const [errors, setErrors] = useState(null)

    function handleLogin (event) {
      event.preventDefault()
      setPassword("")
      setUsername("")
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
            r.json()
            .then((err) => setErrors(err))
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
            r.json()
            .then((err) => setErrors(err))
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
        {errors ? <h2 className='error'>- {errors.error}</h2> : null}
      </>
    );
  }

export default LoginForm