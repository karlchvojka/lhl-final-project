// Standard imports
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

class BudgetSidebar extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="sidebarComp">
        <Nav.Link href="/">
          <FontAwesomeIcon icon={faHome} />
          <p>Dashboard</p>
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
          <p>Bills</p>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <FontAwesomeIcon icon={faUser} />
          <p>Roommates</p>
        </Nav.Link>
      </Nav>
      )
    }
  }

  export default BudgetSidebar;
