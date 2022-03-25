import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './LoginForm'
import Quizzes from "./Quizzes";
import MyTimesTables from "./MyTimesTables";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import MultiplicationRules from "./MultiplicationRules";
import SignUpForm from "./SignUpForm";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  const [allFacts, setAllFacts] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me", {method: 'GET'})
      .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/problems", {method: 'GET'})
      .then((r) => {
      if (r.ok) {
        r.json().then((facts) => setAllFacts(facts))
      }
    });
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/user-login">
            <LoginForm user={user} setUser={setUser}/>
          </Route>
          <Route path="/user-signup">
            <SignUpForm user={user} setUser={setUser}/>
          </Route>
          <Route path="/multiplication-rules">
            <MultiplicationRules user={user} setUser={setUser}/>
          </Route>
          <Route path="/teacher-dashboard">
            <TeacherDashboard user={user} setUser={setUser}/>
          </Route>
          <Route path="/student-dashboard">
            <StudentDashboard user={user} setUser={setUser}/>
          </Route>
          <Route path="/my-times-tables">
            <MyTimesTables allFacts={allFacts} user={user} setUser={setUser}/>
          </Route>
          <Route path="/quizzes">
            <Quizzes user={user} setUser={setUser}/>
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
