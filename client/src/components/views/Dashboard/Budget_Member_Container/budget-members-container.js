import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import BudgetMember from "./budget-member.js";


class BudgetMembersContainer extends Component {
  render() {
    const { subtotals } = this.props
    return (
      <Container className="budgetMembers">
        <Row>
          <h3>Budget Members</h3>
        </Row>
        {this.props.budget_members.map(member => (
          <BudgetMember key={member.id} member={member} subtotal={(subtotals[member.id])} />
        ))}
      </Container>
    );
  }
}

export default BudgetMembersContainer;
