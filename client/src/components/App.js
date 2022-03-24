import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './LoginForm'

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    // auto-login
    fetch("/me", {method: 'GET'})
      .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/loging">
            <LoginForm user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
