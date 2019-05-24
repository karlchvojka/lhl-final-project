import React, { Component } from 'react';
import Logo from '../../assets/LoginSignup/feather.svg';
import { Link } from "react-router-dom";

class NavbarLoginSignup extends Component {
  render() {
    let backButton = '< Back';

    return (
      <div className="row loginSignupNav">
        <div className="col-2">
          <Link className="nav-link" to="/">{backButton}</Link>
        </div>
        <div className="col-10">
          <div className="logoWrap">
            <img alt="" src={Logo} />
            <p>SQUABBLE</p>
          </div>
        </div>
      </div>
      )
    }
  }

  export default NavbarLoginSignup;
