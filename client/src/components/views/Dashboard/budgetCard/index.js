import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class BudgetCard extends Component {
  render() {
    return(
      <Col className="budgetCardWrap" xl={4} lg={4} md={4} sm={2} xs={2}>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.budgetName}</Card.Title>
            <Card.Text>
              This is a BUDGET!!!!!!
            </Card.Text>
            <Button variant="primary" href="/budget">Go to Budget</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default BudgetCard;
