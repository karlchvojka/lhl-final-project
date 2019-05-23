// React imports
import React from 'react';
import ListApp from "./apitest.js"
import NavbarComp from "./components/Nav_bar.js"

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="container-fluid">
      <NavbarComp />
    </div>
  );
}

export default App;
