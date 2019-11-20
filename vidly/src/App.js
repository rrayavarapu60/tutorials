import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";
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
          <Route path="/movies" component={Movies}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
