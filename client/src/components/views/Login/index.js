import React from "react";
import NavbarLoginSignup from "../login-signup-navbar.js";
import { Container, Row, Col } from 'react-bootstrap';
import './css_module.scss';

export default ({ handleFormSubmit }) => (
  <Container fluid='true' className="loginPage">
    <NavbarLoginSignup />
    <Row id="loginForm" >
      <Col xl={{span: 4, offset:4}} lg={{span: 4, offset:4}} md={{span: 6, offset:3}} sm={{span: 8, offset:2}} xs={{span: 10, offset:1}}>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleFormSubmit}>
        <Container fluid="true" className="noGutters">
        <Row>
          <Col xl={5} lg={5} md={12} sm={12} xs={12}>
          <p>Email:</p>
          </Col>
          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
          <input type="email" name="email" placeholder="Enter Email" />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={12} sm={12} xs={12}>
          <p>Password:</p>
          </Col>
          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
          <input type="password" name="password" placeholder="Enter Password"/>
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
  </Container>
);
