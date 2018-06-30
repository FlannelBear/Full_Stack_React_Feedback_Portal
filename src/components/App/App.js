import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

import { connect } from 'react-redux';

// Pages
import Feeling from '../../Pages/Feeling';
import Understand from '../../Pages/Understand';
import Support from '../../Pages/Support';
import Comments from '../../Pages/Comments';
import Thankyou from '../../Pages/Thankyou';
import Admin from '../../Pages/Admin';

const mapReduxToProps = ({feedbackReducer}) => ({
  feedbackReducer
});

class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path='/' component={Feeling}/>
          <Route path='/understand' component={Understand}/>
          <Route path='/support' component={Support}/>
          <Route path='/comments' component={Comments}/>
          <Route path='/thankyou' component={Thankyou}/>
          <Route path='/admin' component={Admin}/>
        </div>
      </Router>
        {JSON.stringify(this.props.feedbackReducer)}
      </div>
    );
  }
}

export default connect(mapReduxToProps)(App);
