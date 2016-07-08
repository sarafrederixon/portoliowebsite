var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

//require("./Button.scss");

var Button = React.createClass({
  render: function() {
    return <Link className="Button" to={this.props.link}>
      <span>{this.props.value}</span>
    </Link>
  }
});

export default Button;
