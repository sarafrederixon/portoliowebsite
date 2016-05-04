var React = require('react');

//var Router = require('react-router');
//var Link = Router.Link;
//<Link className="Button" to={this.props.link}>

require("./Button.scss");

var Button = React.createClass({
  render: function() {
    return <a className="Button">
      <span>{this.props.value}</span>
    </a>
  }
});

export default Button;
