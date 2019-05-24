import React from 'react';
import ListApp from '../../apitest.js'
import NavbarComp from "./home-nav-bar.js"


export default ({}) => {

  return (
    <div className="content-area container-fluid home-page">
    <NavbarComp />
      <h1>
        THIS IS SQUABBLE!!!!!!!
      </h1>
      <img alt="" src="https://media0.giphy.com/media/wegdgVEeRDEY0/giphy.gif" />
      <ListApp />
    </div>

)}
