import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class BudgetInfo extends Component {
  // let { budget, line_items, budget_members, sumObjectValues} = props;
  render() {
      // const totals = this.props.sumObjectValues(this.props.line_items, 'amount')
      let newDate = this.props.budget.created_at;

      return (
      <Container className="budgetInfo">
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <h2>{this.props.budget.name}</h2>
          </Col>
          <Col className="budgetTotal" xl={6} lg={6} md={6} sm={6} xs={6}>
            <p>Budget total: {this.props.line_items.reduce((total, item) => total + item.amount, 0)}</p>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <p className="createdDate">Created on: {new Date(newDate).toDateString()}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BudgetInfo;
