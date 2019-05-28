import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";



class BudgetMember extends Component {
  render() {
    const { member, subtotal } = this.props;
    const { first, last, email } = member;
    return (
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          {first} {last}
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          {email} Owes: ${subtotal}
        </Col>
      </Row>
    );
  }
}

export default BudgetMember;
