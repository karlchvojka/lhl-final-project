import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Home/feather.svg";
class NavbarComp extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Navbar
            expand="md"
            className="navbar fixed-top navbar-light container"
          >
            <Navbar.Brand href="#home">
              <img alt="" src={Logo} />
              Squabble
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav navbar-nav" style={{ width: "100%" }}>
              <ul
                className="navbar-nav flex"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <li />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary">Sign up</button>
                  </li>
                </div>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavbarComp;
