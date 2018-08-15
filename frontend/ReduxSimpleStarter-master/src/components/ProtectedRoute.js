import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import ls from 'local-storage';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    ls.get('token')
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

module.exports={
  ProtectedRoute
}