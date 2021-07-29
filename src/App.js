import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import ShoppingCart from "./pages/ShoppingCart";
import { landingRoute, shopRoute, shoppingCartRoute } from "./utils/constants";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={landingRoute}>
          <Landing />
        </Route>
        <Route exact path={shoppingCartRoute}>
          <ShoppingCart />
        </Route>
        <Route exact path={shopRoute}>
          <Store />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
