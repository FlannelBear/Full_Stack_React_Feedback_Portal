import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
          <Route exact path='/' component={}/>
        </div>
      </Router>
    );
  }
}

export default App;
