import React from 'react';
import NavbarComp from "../Home/home-nav-bar.js"
import { Container, Row, Col } from "react-bootstrap";

export default ({handleFormSubmit}) => (

  <div className='signup container-fluid'>
    <NavbarComp />

    <Row id="signupForm" >
      <Col className="noGutters" xl={{span: 4, offset:4}} lg={{span: 4, offset:4}} md={{span: 4, offset:4}} sm={{span: 4, offset:4}} xs={{span: 4, offset:4}}>
      <h1>Sign Up</h1>
      <form id="signup-form" onSubmit={handleFormSubmit}>
        <Container fluid="true" className="noGutters">
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>First Name:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="text" name="first" placeholder="Enter First Name" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Last Name:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="text" name="last" placeholder="Enter First Name" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Email:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="email" name="email" placeholder="Enter Email (eg. email@email.com)" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Password:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="password" name="password" placeholder="Enter Password" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Confirmation:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="password" name="password" placeholder="Confirm Password" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Phone:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="text" name="phone" placeholder="Enter Phone Number (eg. 111-111-1111)" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Profile Photo:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="text" name="photo" placeholder="(eg. https://www.placecage.com/200/200)" />
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <input className="signupSubmit" type="submit" value="Sign Up!" />
          </Col>
        </Row>
        </Container>
      </form>
      </Col>
    </Row>

  </div>
)
