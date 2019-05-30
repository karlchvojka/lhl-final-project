import React from "react";
import NavbarComp from "./home-nav-bar";
import HomeImage from "../../../assets/Home/Img.png";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

// test
export default () => {
  return (
    <main
      className="content-area container-fluid"
    >
      <NavbarComp />
      <Row className="overWrap" style={{ backgroundImage: `url(${HomeImage})` }}>
        <Col className="homeTextWrap" xl={5} lg={5} md={7} sm={7} xs={7}>
          <h2>Easily split expenses and bills with your roommates</h2>
          <Link to="/signup">
            <button className="btn btn-primary" >
              Sign up
            </button>
          </Link>
        </Col>
        <Col xl={7} lg={7} md={7} sm={7} xs={7} />
      </Row>
    </main>
  );
};
