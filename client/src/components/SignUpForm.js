import {useState} from "react"

function SignUpForm ({username, setUsername, password, setPassword, teacherLogin, setTeacherLogin, setUser, user, setIsTeacher}) {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [teacherLogin, setTeacherLogin] = useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")

  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then(onLogin);
    // }

    function handleSubmit(e) {
      e.preventDefault();
      // setErrors([]);
      // setIsLoading(true);
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
          // setIsLoading(false);
          if (r.ok) {
            r.json()
            .then((user) => setUser(user));
          } else {
            r.json()
            // .then((err) => setErrors(err.errors));
            console.log("um, nope")
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
          // setIsLoading(false);
          if (r.ok) {
            r.json()
            .then((user) => setUser(user));
          } else {
            r.json()
            // .then((err) => setErrors(err.errors));
            console.log("um, nope")
          }
        });
      }
    } 



    // function handleLogin (event) {
    //   event.preventDefault()
    //   // setIsLoading(true);
      
    //   if (teacherLogin === false) {
    //     fetch("/me", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password }),
    //     }).then((r) => {
    //       if (r.ok) {
    //         r.json()
    //         .then((user) => {
    //           setUser(user)
    //           setIsTeacher(false)
    //         });
    //       }
    //     })
    //   } else {
    //     fetch("/login-teacher", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password }),
    //     }).then((r) => {
    //       if (r.ok) {
    //         r.json()
    //         .then((user) => {
    //           setUser(user)
    //           setIsTeacher(true)
    //         })
    //       }
    //     })
    //   }
    // }
  
    return (
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

export default SignUpForm