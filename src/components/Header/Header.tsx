import './Header.scss';
import {Component} from "react"
import logo from '../../logo.svg';


class Header extends Component {

  render(){
    return(
      <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src={logo} width="50" height="50" className="App-logo d-inline-block" alt="logo"/>
             React with Serveless
          </a>
       </nav>
    )
  }
}

export default Header;
