import React, { Component } from 'react';
import BudgetMember from './budget-member.js';
import { Container, Row, Col } from 'react-bootstrap';


class BudgetMembersContainer extends Component {
  render() {
    return (
      <Row className="budgetMembers">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container>
          <p>Budget Members Container</p>
          {this.props.budget_members.map(member => <BudgetMember key={member.id} name={member.id} />)}
          </Container>
        </Col>
      </Row>
      )
    }
  }

  export default BudgetMembersContainer;
