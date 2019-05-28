import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import houseIcon from '../../../assets/Dashboard/house_icon.svg';
import dollarIcon from '../../../assets/Dashboard/dollar_icon.svg';
import personIcon from '../../../assets/Dashboard/person_icon.svg';

class DashboardSidebar extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column sidebarComp">
        <Nav.Link href="/">
          <p><img alt="icon of a house" src={houseIcon} /></p>
          <p>Dashboard</p>
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <p><img alt="icon of a dollar sign" src={dollarIcon} /></p>
          <p>Bills</p>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <p><img alt="icon of a person" src={personIcon} /></p>
          <p>Roommates</p>
        </Nav.Link>
      </Nav>
      )
    }
  }

  export default DashboardSidebar;
