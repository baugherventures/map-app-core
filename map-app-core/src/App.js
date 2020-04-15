import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
// import PrivateRoute from './utilities/PrivateRoute';

import Map from './components/views/Map';
import Dashboard from './components/views/Dashboard';
import Discover from './components/views/Discover';
import Saved from './components/views/Saved';
import Trip from './components/views/Trip';

import './App.css';
import { getCurrentUser, } from './redux-store/App/UserActions.js';



function App(props) {
  const maplib = `https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.3.1/build/ol.js`
    
  return (
    <div className="App">
      <script src={maplib}/>
      <Route exact path='/' component={Map} />
      <Route path='/Dashboard' component={Dashboard}/>
      <Route path='/Discover' component={Discover} />
      <Route path='/Saved' component={Saved} />
      <Route path='/Trip' component={Trip} />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
      currentUser: state.UserReducers.currentUser,
      loading: state.UserReducers.loading,
      loginFailed: state.UserReducers.loginFailed,
  }
}

export default connect(mapStateToProps, { getCurrentUser, })(App)
