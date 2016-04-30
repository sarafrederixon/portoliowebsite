import React from 'react';
import Button from '../Button';

require("./Landing.scss");

var styles = {
  html: {
    margin: 0,
    padding: 0,

    height: '100%',
    overflow: 'hidden',
    WebkitTextSizeAdjust: 100,
    color: 'white',
    backgroundImage: 'url('+'../../../photographs/FushimiInariLight.jpg'+')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center center",

    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100%',

    backgroundColor: "#454B66"
  },
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(61, 66, 90, 0.78)',
    width: '100%',
    height: '100%'
  }
};

var Landing = React.createClass({
    componentWillMount: function(){
      for(var i in styles.html) {
        document.documentElement.style[i] = styles.html[i];
      };
      for(var i in styles.body){
        document.body.style[i] = styles.body[i];
      };
    },
    componentWillUnmount: function(){
      for(var i in styles.html) {
        document.documentElement.style[i] = null;
      };
      for(var i in styles.body){
        document.body.style[i] = null;
      };
    },
  render: function() {
      return <div className="Landing-Content">
        <h1 className="Landing-Header">Sara Frederixon</h1>
        <div className="Landing-Buttons">
          <Button value="Photographer" link="photography"/>
          <Button value="Developer" link="photography"/>
        </div>
      </div>
  }
});

export default Landing;
