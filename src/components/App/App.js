import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

// Pages
import Feeling from '../../Pages/Feeling';
import Understand from '../../Pages/Understand';
import Support from '../../Pages/Support';
import Comments from '../../Pages/Comments';
import Thankyou from '../../Pages/Thankyou';
import Admin from '../../Pages/Admin';

// Component Testing

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path='/' component={Feeling}/>
          <Route exact path='/' component={Understand}/>
          <Route exact path='/' component={Support}/>
          <Route exact path='/' component={Comments}/>
          <Route exact path='/' component={Thankyou}/>
          <Route exact path='/' component={Admin}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
