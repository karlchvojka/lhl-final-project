import React from 'react';
import NavbarComp from "../Home/home-nav-bar.js"

export default ({handleFormSubmit}) => (

  <div className='signup container-fluid'>
    <NavbarComp />
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name:
        <input type="text" name="first" />
      </label>
      <label>
        Last Name:
        <input type="text" name="last" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <label>
        Password Confirmation:
        <input type="password" name="passwordconf" />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" />
      </label>
      <label>
        Photo:
        <input type="text" name="photo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <p>Signup page</p>
  </div>
)
