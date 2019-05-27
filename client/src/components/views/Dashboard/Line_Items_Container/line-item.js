import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LineItem extends Component {
  render() {
    return (
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
        <p>{this.props.name}:</p>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
         {this.props.price}
        </Col>
      </Row>
      )
    }
  }

  export default LineItem;
