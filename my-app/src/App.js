import React from 'react'
import Login from "./componentes/Login/Login";
import NuevaSolicitud from "./componentes/NuevaSolicitud/NuevaSolicitud";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/NuevaSolicitud">
          <NuevaSolicitud />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
