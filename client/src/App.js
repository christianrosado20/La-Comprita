import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ResultPage from './components/ResultPage';
import Dashboard from './admin/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Resultado" component={ResultPage} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
