import React, { Component } from 'react';
import LineItem from './line-item.js';
import { Container, Row, Col } from 'react-bootstrap';

class LineItemsContainer extends Component {
  render() {
    return (
      <Row className="lineItemsContainer">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container>
            {this.props.line_items.map(item => <LineItem key={item.id} name={item.name} price={item.amount} /> ) }
          </Container>
        </Col>
      </Row>
      )
    }
  }

  export default LineItemsContainer;
