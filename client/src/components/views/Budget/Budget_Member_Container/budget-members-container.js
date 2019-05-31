import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BudgetMember from "./budget-member.js";

class BudgetMembersContainer extends Component {
  render() {
    const { subtotals } = this.props
    const emailString = this.props.budget_members.map(member => (member.email)).join(', ');
    const notForm = document.getElementsByClassName('notificationForm');
    function notificationClick() {
      notForm[0].style.display = 'block';
    };

    return (
      <Container className="budgetMembers" fluid='true'>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <h3>Budget Members</h3>
          </Col>
        </Row>
        {this.props.budget_members.map(member => (
          <BudgetMember key={member.id} member={member} subtotal={(subtotals[member.id])} />
        ))}
        <Row className="notificationWrap">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <button onClick={notificationClick} >Notify Budget Members</button>
            <div className="notificationForm">
              <form>
                <p>To:</p>
                <input type="text" value={emailString} />
                <p>Subject</p>
                <input type="text" value={this.props.budgetName + ' Squabble Notification'} />
                <p>Message</p>
                <textarea></textarea>
                <input className="notifSubmit" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BudgetMembersContainer;
