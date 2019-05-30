import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BudgetMember from "./budget-member.js";


class BudgetMembersContainer extends Component {
  render() {
    const { subtotals } = this.props
    console.log("TCL: BudgetMembersContainer -> render -> budget_members_subtotal", subtotals)
    return (
      <Container className="budgetMembers" fluid='true'>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <h3>Budget Members Container</h3>
          </Col>
        </Row>
        {this.props.budget_members.map(member => (
          <BudgetMember key={member.id} member={member} subtotal={(subtotals[member.id])} />
        ))}
      </Container>
    );
  }
}

export default BudgetMembersContainer;
