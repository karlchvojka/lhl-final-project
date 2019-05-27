import React, { Component } from 'react';
import LineItem from './line-item.js';
import { Container, Row, Col } from 'react-bootstrap';
import LineItemsForm from './line-items-form.js';

class LineItemsContainer extends Component {
  render() {
    return (
      <Row className="lineItemsContainer">
        <Col>
          <Container>
            <Row>
            <form onSubmit={this.props.handleSubmit}>
              <label>
                New Budget Item Name:
                <input type="text" name="name" />
              </label>
              <label>
                New Budget Item Amount:
                <input type="number" name="amount" />
              </label>
              <label>
                Is this an incidental type of expense?
                <input type="checkbox" name="paid" placeholder="(ie. Toilet Paper, Cleaning Suplies, etc.)"/>
              </label>
              <input type='hidden' name="budget_id" value={this.props.budget_id} />
              <input type="submit" value="Submit" />
            </form>
            </Row>
            {this.props.line_items.map(item => <LineItem key={item.id} name={item.name} price={item.amount} /> ) }
          </Container>
        </Col>
      </Row>
      )
    }
  }

  export default LineItemsContainer;
