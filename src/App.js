import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import { landingRoute } from "./utils/constants";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={landingRoute} >
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;