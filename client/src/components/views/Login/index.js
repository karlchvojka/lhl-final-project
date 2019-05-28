import React from "react";
import NavbarLoginSignup from "../login-signup-navbar.js";
import { Container, Row, Col } from 'react-bootstrap';

export default ({ handleFormSubmit }) => (
  <div className="container-fluid loginPage">
    <NavbarLoginSignup />

    <Row id="loginForm" >
      <Col className="noGutters" xl={{span: 4, offset:4}} lg={{span: 4, offset:4}} md={{span: 4, offset:4}} sm={{span: 4, offset:4}} xs={{span: 4, offset:4}}>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleFormSubmit}>
        <Container fluid="true" className="noGutters">
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Email:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="email" name="email" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <p>Password:</p>
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <input type="password" name="password" />
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <input className="loginSubmit" type="submit" value="Login" />
          </Col>
        </Row>
        </Container>
      </form>
      </Col>
    </Row>



  </div>
);
