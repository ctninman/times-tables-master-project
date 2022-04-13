import {useState} from "react"
import {useHistory} from 'react-router-dom'

function SignUpForm ({username, setUsername, password, setPassword, teacherLogin, setTeacherLogin, setUser, user, setIsTeacher}) {

    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState(null)

  let history = useHistory()

    function handleSubmit(e) {
      e.preventDefault();
      if (teacherLogin === false) {
        fetch("/signup-student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            classroom_id: 1,
            is_teacher: false,
            offer_support: false,
            time_to_solve: 7,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => setUser(user))
            .then(() => {
              setIsTeacher(false)
            })
            .then(history.push('/multiplication-rules'))
          } else {
            r.json()
            
            .then((err)=>setErrors(err))
          }
        });
      } else {
        fetch("/signup-teacher", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            email: email,
            is_teacher: true
          }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => setUser(user))
            .then(() => setIsTeacher(true))
            .then(history.push('/teacher-dashboard'))
          } else {
            r.json()
            .then((err)=>setErrors(err))
          }
        });
      }
      setPassword("")
      setPasswordConfirmation("")
      setUsername("")
    } 
  
    return (
      <div>
      <h1 style={{marginLeft: '10px'}}>{ teacherLogin ? "Teacher Sign Up" : "Student Sign Up"}</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '400px', marginLeft: '20px'}}>
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
        <label htmlFor="password-confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password-confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        { teacherLogin 
        ?
          <>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </>
        :
          null
        }

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input
          type="checkbox"
          id="is-teacher"
          checked={teacherLogin}
          onChange={() => setTeacherLogin(!teacherLogin)}
          />
          <label htmlFor="is-teacher">I am a teacher</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {errors ? errors.errors.map((error) => <h2 key={error} className='error'>-{error}</h2>) : null}

      </div>

    );
  }

export default SignUpForm