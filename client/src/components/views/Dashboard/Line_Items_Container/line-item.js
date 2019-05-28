import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LineItem extends Component {
  render() {
    const { budget_members, item, user } = this.props;
    const { user_id, amount, name } = item;
    const lineItemCreator = budget_members.find(function (element) {
      if (user_id === element.id) {
        return element;
      }
      return null;
    });
    const yourShare = function name() {
      if (item.paid) {
        if (lineItemCreator.id === user.id) {
          return ((amount * -1) / budget_members.length) * (budget_members.length - 1);
        }
      }
      return amount / budget_members.length * 1;
    };
    const myShare = yourShare();
    return (
      <Row className="lineItem">
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          <p className="itemName">{name}</p>
          <p className="itemCreator">{lineItemCreator.first} {lineItemCreator.last}: </p>
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          <p className="itemTotal"><span>Total:</span> {amount}{" "}</p>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
          <p className="itemOwe"><span>You Owe:</span>{" $"}
            {(myShare).toFixed(2)}</p>
        </Col>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
          <p>delete</p>
        </Col>
      </Row>
    )
  }
}

export default LineItem;
