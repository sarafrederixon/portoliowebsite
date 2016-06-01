require('./Navigation.scss');

var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function() {
    return <div>
      <h1 className="Nav-Header">Sara Frederixon</h1>
      <div className="Link-Div">
        <Link className="Link" to="/">
          <span>Home</span>
        </Link>
        <Link className="Link" to="photography" activeClassName="active">
          <span>Photography</span>
        </Link>
        <Link className="Link" to="projects" activeClassName="active">
          <span>Projects</span>
        </Link>
        <Link className="Link" to="about" activeClassName="active">
          <span>About</span>
        </Link>
      </div>
      <div className="hr-Div">
        <hr />
      </div>
    </div>
  }
});

export default Navigation;
