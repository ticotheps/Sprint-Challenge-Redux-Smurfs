import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App () {
  return (
    <Router>
      <div className="App">
        <Route path="/smurfs" component={SmurfsList} />
      </div>
    </Router>

  );    
}

const mapStateToProps = state => ({
  smurfs: [],
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: null
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
