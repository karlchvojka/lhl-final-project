import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BudgetMember from "./budget-member.js";



class BudgetMembersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { noteFormVisible: false };
    this.handleNoteClick = this.handleNoteClick.bind(this);
  }
  handleNoteClick() {
    this.setState({
      noteFormVisible: !this.state.noteFormVisible
    })
  }
  render() {
    const { subtotals } = this.props
    const emailString = this.props.budget_members.map(member => (member.email)).join(', ');
    const notForm = document.getElementsByClassName('notificationForm');
    const { first, last } = this.props.user
    const greeting = `Hello Squabbler!\nYou have received an auto-generated notification from Squabble from ${first} ${last} for ${this.props.budgetName}. `
    const owings = this.props.budget_members.map(member => (
      `${member.first} owes ${subtotals[member.id]}.`
    )).join(' ')
    const closing = ` Please check out more details of your Squabble here.\nThanks!\nSquabble Team`
    
    function notificationClick() {
      notForm[0].style.display = 'block';
    };

    return (
      <Container className="budgetMembers" fluid='true'>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <h3>Squabble Members</h3>
          </Col>
        </Row>
        {this.props.budget_members.map(member => (
          <BudgetMember key={member.id} member={member} subtotal={(subtotals[member.id])} />
        ))}
        <Row className="notificationWrap">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <button onClick={this.handleNoteClick}>{this.state.noteFormVisible ? 'Close' : 'Notify Budget Members'}</button>
            <div className={this.state.noteFormVisible ? 'notificationForm showForm' : 'notificationForm hiddenForm'}>
              <form>
                <p>To:</p>
                <input type="text" value={emailString} />
                <p>Subject</p>
                <input type="text" value={this.props.budgetName + ' | Squabble Notification'} />
                <p>Message</p>
                <textarea type="text" value={greeting + owings + closing} ></textarea>
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
