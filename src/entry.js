// // entry.js with no routing
// var React = require('react');
// var Root = require('./components/Landing').default;
// var ReactDOMServer = require('react-dom/server');
//
// export default (locals, callback) => {
//   var html = ReactDOMServer.renderToStaticMarkup(<Root/>);
//    callback(null, '<!DOCTYPE html>' + html)
// };
//
// if (typeof document != 'undefined') {
//    React.render(<Root/>, document);
// }

// entry.js
var React = require('react')
var Router = require('react-router')
var Routes = require('./Routes.jsx')
var ReactDOMServer = require('react-dom/server');


export default (locals, callback) => {
   ReactDOM.render(
      <Router routes={Routes} path={locals.path} ></Router>
   Router.run(Routes, locals.path, function (Handler) {
      var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Handler, locals))
      callback(null, '<!DOCTYPE html>' + html)
   })
   )
}
