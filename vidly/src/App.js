import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";
import Customer from "./components/customer";
import Rental from "./components/rental";
import MovieForm from "./components/movieForm";
import Navibar from "./components/navibar";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Navibar />
      <hr />
      <div className="content">
        <Switch>
          <Route path="/movieForm" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customer" component={Customer} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
