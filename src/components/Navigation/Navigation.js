require('./Navigation.scss');

var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  toggleDropdown: function() {
    document.getElementsByClassName("ul-Nav")[0].classList.toggle("responsive");
  },

  render: function() {
    return <div>
      <h1 className="Nav-Header">Sara Frederixon</h1>
      <div className="Link-Div">
          <ul className="ul-Nav">

          <li> <Link className="Link" to="/">
            <span>Home</span>
          </Link> </li>

          <li> <Link className="Link" to="photography" activeClassName="active">
            <span>Photography</span>
          </Link> </li>

          <li> <Link className="Link" to="projects" activeClassName="active">
            <span>Projects</span>
          </Link> </li>

          <li> <Link className="Link" to="about" activeClassName="active">
            <span>About</span>
          </Link> </li>

            <li className="icon">
              <a onClick={this.toggleDropdown}>&#9776;</a>
            </li>

        </ul>
      </div>
      <div className="hr-Div">
        <hr />
      </div>
    </div>
  }
});

export default Navigation;
