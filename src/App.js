import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import Order from "./pages/Order";
import Layout from "./components/Layout";
import { landingRoute, shopRoute, orderRoute } from "./utils/constants";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={landingRoute}>
            <Landing />
          </Route>
          <Route exact path={orderRoute}>
            <Order />
          </Route>
          <Route exact path={shopRoute}>
            <Store />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
