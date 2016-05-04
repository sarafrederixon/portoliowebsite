require('./Navigation.scss');

var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function() {
    return <div>
      <h1 className="Nav-Header">Sara Frederixon</h1>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="photography">
          <span>Photography</span>
        </Link>
      </div>
    </div>
  }
});

export default Navigation;
