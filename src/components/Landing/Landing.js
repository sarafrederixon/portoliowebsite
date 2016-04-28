import React from 'react';
import Button from '../Button';
require("./Landing.scss");

var styles = {
  body: {
    margin: 0,
    padding: 0,

    height: 100,
    overflow: 'hidden',
    WebkitTextSizeAdjust: 100,
    color: 'white',
 //   fontFamily: 'Poppins', 'Helvetica', sansSerif,

    backgroundColor: 'linear-gradient(rgba(61, 66,90, 0.78),rgba(61, 66,90, 0.78))',
    backgroundImage: 'url('+'../../../photographs/FushimiInariLight.jpg'+')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center center fixed",

    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    position: 'fixed',
    width: 100,

    backgroundColor: "#454B66"
  }
};

var Landing = React.createClass({
    componentWillMount: function(){
      for(var i in styles.body){
        document.body.style[i] = styles.body[i];
      }
    },
    componentWillUnmount: function(){
      for(var i in styles.body){
        document.body.style[i] = null;
      }
    },
  render: function() {
      return <div className="Landing-Content">
        <h1 className="Landing-Header">Sara Frederixon</h1>
        <div className="Landing-Buttons">
          <Button value="Photographer"/>
          <Button value="Developer"/>
        </div>
      </div>
  }
});

export default Landing;
