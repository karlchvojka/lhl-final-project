import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import BudgetMember from "./budget-member.js";


class BudgetMembersContainer extends Component {
  render() {
    const { subtotals } = this.props
    console.log("TCL: BudgetMembersContainer -> render -> budget_members_subtotal", subtotals)
    return (
      <Container className="budgetMembers">
        <Row>
          <h3>Budget Members Container</h3>
        </Row>
        {this.props.budget_members.map(member => (
          <BudgetMember key={member.id} member={member} subtotal={(subtotals[member.id])} />
        ))}
      </Container>
    );
  }
}

export default BudgetMembersContainer;
