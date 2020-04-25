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


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Resultado" component={ResultPage} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
