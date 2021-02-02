import { withRouter } from 'react-router-dom';

import './NavBar.css'

import { Navbar } from '../../../node_modules/react-bootstrap'
import { isLogin } from '../../utils/index'
import logo from '../../assets/images/ns-logo.svg'

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props) {

  const handleLogoClick = () => props.history.push('./')

  const handleLogout = () => {
    props.history.push('./login');
    localStorage.removeItem('logged_in');
  }

  return (
    <Navbar className='navBar'>
      <img
        alt="logo"
        src={logo}
        className='logo'
        onClick={handleLogoClick}
      />
      {
        isLogin() &&
        <FontAwesomeIcon
          icon={faSignOutAlt}
          onClick={handleLogout}
          className='logout'
        />
      }
    </Navbar>
  );
}

export default withRouter(NavBar);