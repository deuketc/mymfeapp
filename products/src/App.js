import React from 'react';
import { Switch, Link, Route, Router } from 'react-router-dom';

import Products from './components/Products';
import Landing from './components/Landing';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  );
};
