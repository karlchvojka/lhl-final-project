import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class BudgetMember extends Component {
  render() {
    return (
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        {this.props.name}
        </Col>
      </Row>
      )
    }
  }

  export default BudgetMember;
