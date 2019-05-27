import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LineItem extends Component {
  render() {
    const { budget_members, item, user } = this.props;
    const { user_id, amount, name } = item;
    const lineItemCreator = budget_members.find(function(element) {
      if (user_id === element.id) {
        return element;
      }
      return null;
    });
    const yourShare = function name() {
      if (item.paid) {
        console.log("THis is line item creator", lineItemCreator)
        if (lineItemCreator.id === user.id) {
          return amount * -1;
        }
      }
      return amount * 1;
    };
    const myShare = yourShare();
    return (
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
        <p>
          {lineItemCreator.first} {lineItemCreator.last}: {name} Total: {amount}{" "}
          You Owe:{" $"}
          {(myShare / budget_members.length).toFixed(2)}
        </p>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
        </Col>
      </Row>
      )
    }
  }

export default LineItem;
