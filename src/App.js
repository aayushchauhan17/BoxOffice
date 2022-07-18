import React from "react";
// import Navbar from './components/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Show from "./Pages/Show";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/BoxOffice">
          <Home />
        </Route>
        <Route path="/BoxOffice">
          <Starred />
        </Route>
        <Route path="/show/:id">
          <Show />
        </Route>
        <Route>
          <h1>Error</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
