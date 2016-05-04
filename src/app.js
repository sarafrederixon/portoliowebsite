import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Landing from './components/Landing';
//import Button from './components/Button';
import Photography from './components/Photography';

require("./main.scss");

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="photography" component={Photography} />
    </Route>
  </Router>
), document.getElementById('app'));
