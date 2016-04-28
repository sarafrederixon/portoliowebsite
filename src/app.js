import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Landing from './components/Landing';
import Photography from 'photography';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="photography" component={Photography} />
  </Router>
), document.getElementById('app'));
