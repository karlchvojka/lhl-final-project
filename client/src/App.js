// React imports
import React from 'react';
import ListApp from "./components/apitest.js"
import NavbarComp from "./components/views/Home/home-nav-bar.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/views/Home/';
import Aboutpg from './components/views/About/';
import HomeFooter from './components/views/footer.js'
import Login from './components/views/Login/';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <Router>
    <div className="container-fluid">
      <NavbarComp />
      <Route path="/" exact component={ Home } />
      <Route path="/about" exact component={ Aboutpg  } />
      <Route path="/login" component={ Login } />
      <HomeFooter />
    </div>
    </Router>
  );
}

export default App;
