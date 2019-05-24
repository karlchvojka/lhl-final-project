// React imports
import React, { Component } from 'react';
import ListApp from "./components/apitest.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/views/Home/';
import Aboutpg from './components/views/About/';
import HomeFooter from './components/views/footer.js'
import Login from './components/views/Login/';
import Signup from './components/views/Signup'

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export default class App extends Component { 

  constructor(props) {
    super(props)
    this.state = {}
  }


  handleSignupFormSubmit = evt => {
    evt.preventDefault();
    console.log("These are the signup form values", evt.target.first.value, evt.target.last.value, evt.target.email.value, 
    evt.target.password.value, evt.target.passwordconf.value, evt.target.phone.value, evt.target.photo.value);
  }

  
 render() {
    return (
      <Router>
        <div className="container-fluid">
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ Aboutpg  } />
        <Route path="/login" component={ Login } />
        {/* <Route path="/signup" component={ Signup } /> */}
        <Route path="/signup" component={() => <Signup handleFormSubmit={this.handleSignupFormSubmit}/> } />
        <HomeFooter />
        </div>
      </Router>
      );
    }
    
  }
