import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class BudgetCard extends Component {
  render() {
    const url = "/budgets/" + this.props.budgetID
    return(
      <Col className="budgetCardWrap" xl={4} lg={4} md={4} sm={2} xs={2}>
        <Card>
          <Card.Img variant="top" src={this.props.imgSrc} />
          <Card.Body>
            <Card.Title>{this.props.budgetName}</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" href={url}>Go to Budget</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default BudgetCard;
