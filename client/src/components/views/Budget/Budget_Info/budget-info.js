import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-plaza.css'


const BudgetInfo = props => {
  // let { budget, line_items, budget_members, sumObjectValues} = props;
  
  // const totals = this.props.sumObjectValues(this.props.line_items, 'amount')
  let newDate = props.budget.created_at;
  console.log("This is budgetInfoprops", props)

  return (
    <Row className="budgetInfo">
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2>{props.budget.name}</h2>
              <p className="createdDate">Created on: {new Date(newDate).toDateString()}</p>
            </Col>
            <Col className="budgetTotal" xl={6} lg={6} md={12} sm={12} xs={12}>
              <div><span>Overall total:</span> $ <Odometer animation="count" format="(,ddd).dd" duration={1500} value={props.budget_total.overall_total} /> </div>
              <div><span>Shared total:</span> $ <Odometer animation="count" format="(,ddd).dd" duration={1500} value={props.budget_total.shared_total} /> </div>
              <div><span>Squabbled expenses:</span> $ <Odometer animation="count" format="(,ddd).dd" duration={1500} value={props.budget_total.other_total} /></div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )

}

export default BudgetInfo;
