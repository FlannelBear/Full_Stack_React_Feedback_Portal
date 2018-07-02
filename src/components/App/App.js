import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';

// Material UI
import { withStyles } from '@material-ui/core';
import { styles } from './App.styles';

// Pages
import Feeling from '../../Pages/Feeling';
import Understand from '../../Pages/Understand';
import Support from '../../Pages/Support';
import Comments from '../../Pages/Comments';
import Thankyou from '../../Pages/Thankyou';
import Admin from '../../Pages/Admin';

// Components
import Header from '../Header/Header';
import StatusBar from '../StatusBar/StatusBar';

const mapReduxToProps = ({feedbackReducer}) => ({
  feedbackReducer
});

class App extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
      <div className={classes.main}>
      <Router>
        <div className={classes.page}>
          <Route exact path='/' component={Feeling}/>
          <Route path='/understand' component={Understand}/>
          <Route path='/support' component={Support}/>
          <Route path='/comments' component={Comments}/>
          <Route path='/thankyou' component={Thankyou}/>
          <Route path='/admin' component={Admin}/>
        </div>
      </Router>
      </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxToProps)
)(App);
