// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// React imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/Home/";
import Aboutpg from "./components/views/About/";
import HomeFooter from "./components/views/Footer/footer.js";
import Login from "./components/views/Login/";
import Signup from "./components/views/Signup";
import Dashboard from "./components/views/Dashboard";
import Budget from "./components/views/Budget/";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faEdit, faTrashAlt, faSave, faSortDown, faChevronUp, faChevronDown, faUser, faHome, faFileInvoiceDollar, faBars } from '@fortawesome/free-solid-svg-icons';



library.add(faStroopwafel, faEdit, faTrashAlt, faSave, faSortDown, faChevronUp, faChevronDown, faUser, faHome, faFileInvoiceDollar, faBars)


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLoginSubmit = evt => {
    evt.preventDefault();
    // console.log(evt.target.email.value, evt.target.password.value);
    window.location.href = '/dashboard';
    return false;
  };

  handleSignupFormSubmit = evt => {
    evt.preventDefault();
    // console.log(
    //   "These are the signup form values",
    //   evt.target.first.value,
    //   evt.target.last.value,
    //   evt.target.email.value,
    //   evt.target.password.value,
    //   evt.target.passwordconf.value,
    //   evt.target.phone.value,
    //   evt.target.photo.value
    // );
    window.location.href = '/dashboard';
    return false;

  };

  render() {
    return (
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ Aboutpg  } />
        <Route path="/login" component={() => <Login handleFormSubmit={this.handleLoginSubmit}/> } />
        {/* <Route path="/signup" component={ Signup } /> */}
        <Route
          path="/signup"
          component={() => (
            <Signup handleFormSubmit={this.handleSignupFormSubmit} />
          )}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/budgets/:id" component={Budget} />
        <HomeFooter />
      </Router>
    );
  }
}
