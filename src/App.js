import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={ Mars } />
      </Switch>
    </Router>
  );
}

export default App