import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './components/Header';
import LandingPage from './components/LandingPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
