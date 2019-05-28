import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";



class BudgetMember extends Component {
  render() {
    const { member, subtotal } = this.props;
    const { first, last, email } = member;
    return (
      <Row>
        <Col xl={7} lg={7} md={7} sm={7} xs={7}>
          <p className="userName">{first} {last}</p>
          <p className="userEmail">{email} </p>
        </Col>
        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
          <span>Owes:</span> ${subtotal}
        </Col>
      </Row>
    );
  }
}

export default BudgetMember;
