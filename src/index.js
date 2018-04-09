import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home/Home';
import Lesson from './containers/Lesson/Lesson';
import Profile from './containers/Profile/Profile';

ReactDOM.render(<Router>
  <App>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/lesson" component={Lesson} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </App>
</Router>, window.root);
