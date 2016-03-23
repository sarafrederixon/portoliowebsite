import React from 'react';
import './Button.scss';

var Button = React.createClass({
  render: function() {
    return <a href={this.props.link}>
      <span>{this.props.value}</span>
    </a>
  }
});

export default Button;
