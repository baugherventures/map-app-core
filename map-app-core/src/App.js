import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';

import LandingPage from './components/views/LandingPage';
import Dashboard from './components/views/Dashboard';

import './App.css';
import { getCurrentUser, } from './redux-store/App/UserActions.js';

function App(props) {
  

  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <PrivateRoute path='/Dashboard' component={Dashboard}/>
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
      currentUser: state.UserReducers.currentUser,
      otherUser: state.UserReducers.otherUser,
      loading: state.UserReducers.loading,
      loginFailed: state.UserReducers.loginFailed,
  }
}

export default connect(mapStateToProps, { getCurrentUser, })(App)
