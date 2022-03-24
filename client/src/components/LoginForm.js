import {useState} from "react"

function LoginForm ({setUser, user}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin (event) {
    event.preventDefault()
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      // } else {
        // r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleChange (event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange (event) {
    setPassword(event.target.value)
  }

  function clogUser () {
    console.log(user)
  }

  return (
    <>
    <form onSubmit={handleLogin}>
      <input type='text' onChange={handleChange}></input>

      <input type='text' onChange={handlePasswordChange}></input>

      <button>Login</button>

      
    </form>
    <button onClick={clogUser}>User</button>
    </>

  )
}

export default LoginForm