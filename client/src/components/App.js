import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './LoginForm'
import Quizzes from "./Quizzes";
import MyTimesTables from "./MyTimesTables";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import MultiplicationRules from "./MultiplicationRules";
import SignUpForm from "./SignUpForm";
import NavBar from "./NavBar";
import TeacherNavBar from "./TeacherNavBar";
import {UserContext} from "./UserContext"

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  const [allFacts, setAllFacts] = useState([])
  const [allRules, setAllRules] = useState([])
  const [isTeacher, setIsTeacher] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [teacherLogin, setTeacherLogin] = useState(false)

  
  // const [currentRule, setCurrentRule] = useState({})
  // const [currentRuleNumber, setCurrentRuleNumber] = useState(2)

  useEffect(() => {
    // auto-login
    fetch("/me", {method: 'GET'})
      .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
          if (user.hasOwnProperty('classrooms')) {
            setIsTeacher(true)
          } else {
            setIsTeacher(false)
          }
        });
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

  useEffect (() => {
    fetch('/rules')
    .then(res => res.json())
    .then(data => {
      setAllRules(data)
      // setCurrentRule(data.find((rule) => rule.rule_number === currentRuleNumber))
    })
  }, [] )


  return (
    
    <BrowserRouter>
      
      

      <UserContext.Provider value={{user, setUser}}> 
      {isTeacher === false ?
        <div className="App">
          <NavBar className='nav-bar' isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>
          <Switch>
            <Route path="/user-login">
              <LoginForm 
                user={user} 
                setUser={setUser} 
                setIsTeacher={setIsTeacher} 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                teacherLogin={teacherLogin}
                setTeacherLogin={setTeacherLogin}/>
            </Route>
            <Route path="/user-signup">
              <SignUpForm 
                user={user} 
                setUser={setUser}
                setIsTeacher={setIsTeacher} 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                teacherLogin={teacherLogin}
                setTeacherLogin={setTeacherLogin}/>
            </Route>
            <Route path="/multiplication-rules">
              <MultiplicationRules user={user} setUser={setUser} allRules={allRules} setAllRules={setAllRules}/>
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
          :
          <div className="App">
          <TeacherNavBar className='nav-bar' isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>
          <Switch>
            <Route path="/user-login">
              <LoginForm 
                user={user} 
                setUser={setUser} 
                setIsTeacher={setIsTeacher} 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                teacherLogin={teacherLogin}
                setTeacherLogin={setTeacherLogin}/>
            </Route>
            <Route path="/user-signup">
              <SignUpForm 
                user={user} 
                setUser={setUser}
                setIsTeacher={setIsTeacher} 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                teacherLogin={teacherLogin}
                setTeacherLogin={setTeacherLogin}/>
            </Route>
            <Route path="/multiplication-rules">
              <MultiplicationRules user={user} setUser={setUser} allRules={allRules} setAllRules={setAllRules}/>
            </Route>
            <Route path="/teacher-dashboard">
              <TeacherDashboard user={user} setUser={setUser}/>
            </Route>
            {/* <Route path="/student-dashboard">
              <StudentDashboard user={user} setUser={setUser}/>
            </Route> */}
            {/* <Route path="/my-times-tables">
              <MyTimesTables allFacts={allFacts} user={user} setUser={setUser}/>
            </Route> */}
            {/* <Route path="/quizzes">
              <Quizzes user={user} setUser={setUser}/>
            </Route> */}
            <Route exact path="/">
              <h1>Soon to be the splendid home page</h1>
            </Route>

          </Switch>
        </div>
      }
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
