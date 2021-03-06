import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SmurfsList from "./components/SmurfsList";
import SmurfForm from "./components/SmurfForm";

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <h1 className="navbar-title">Welcome to Smurf Village!</h1>
          <div className="navbar-links-container">
            <Link to="/smurfs">Smurfs</Link>
            <Link to="/smurfs/form">Add Smurf</Link>
          </div>
        </div>
        <Route 
          exact 
          path="/smurfs" 
          component={SmurfsList} 
        />
        <Route 
          path="/smurfs/form" 
          component={SmurfForm} 
        />
      </div>
    </Router>
  );    
}

export default App;
