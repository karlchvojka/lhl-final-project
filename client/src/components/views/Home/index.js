import React, { Component } from 'react';
import ListApp from '../../apitest.js'
import NavbarComp from "./home-nav-bar.js"


export default ({}) => {

  return (
    <main className="content-area container home-page">
    <NavbarComp />
      <h1>
        THIS IS SQUABBLE!!!!!!!
      </h1>
      <img src="https://media0.giphy.com/media/wegdgVEeRDEY0/giphy.gif" />
      <ListApp />
    </main>

)}
