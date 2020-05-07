import React from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/signup">
              <AuthForm  signup buttonText="Sign Up"/>
            </Route>
            <Route path="/signin">
              <AuthForm signin buttonText="Sign In"/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
