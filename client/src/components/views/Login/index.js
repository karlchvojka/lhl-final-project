import React, { Component } from 'react';
import NavbarLoginSignup from '../login-signup-navbar.js'

class Login extends Component {
  render() {
    return (
      <div className="container-fluid loginPage">
      <NavbarLoginSignup />
        <p>login page</p>
      </div>
      )
    }
  }

  export default Login;
