import React, { Component } from 'react';
import NavbarLoginSignup from '../login-signup-navbar.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', email: '', password: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.email.value,event.target.password.value )
  }

  render() {
    return (
      <div className="container-fluid loginPage">
        <NavbarLoginSignup />

        <div className="row loginForm">
          <div className="col-6 offset-3">
            <h1>Signup</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <label>
                      Email:
                      <input type="email" name="email"/>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                  <label>
                    Password:
                    <input type="text" name="password" />
                  </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      )
    }
  }

  export default Login;
