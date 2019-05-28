import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { faStroopwafel, faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class LineItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(user_id, budget_id) {
    if (this.state.editable) {
      let name = this.name.value
      let amount = Number(this.amount.value)
      let id = this.props.item.id
      let line_item = {id: id, name: name, amount: amount, user_id: user_id, budget_id: budget_id}
      console.log("This is the line item being edited", line_item)
      this.props.handleLineItemUpdate(line_item)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    const { budget_members, item, user } = this.props;
    const { user_id, amount, name, id, budget_id } = item;
    const lineItemCreator = budget_members.find(function(element) {
      if (user_id === element.id) {
        return element;
      }
      return null;
    });
    const yourShare = function name() {
      if (item.paid) {
        if (lineItemCreator.id === user.id) {
          return amount * -1;
        }
      }
      return amount * 1;
    };
    const myShare = yourShare();

    let itemNameField = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.item.name}/>
        : <p className="itemName">{name}</p>

    let itemTotalField = this.state.editable? <input type='text' ref={input => this.amount = input} defaultValue={this.props.item.amount}/>
        : <p className="itemTotal"><span>Total:</span> {amount}{" "}</p>

    let itemYouOweField = this.state.editable? <p></p> : <p className="itemOwe"><span>You Owe:</span>{" $"}{(myShare / budget_members.length).toFixed(2)}</p>


    return (
      <Row className="lineItem">
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          {itemNameField}
        <p className="itemCreator">{lineItemCreator.first} {lineItemCreator.last}: </p>
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          {itemTotalField}
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
          {itemYouOweField}
        </Col>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
          <p className="icon" onClick={ () => this.handleEdit(user.id, budget_id)}>{this.state.editable? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} /> }</p>
          <p className="icon" onClick={ () => this.props.handleLineItemDelete(id)}><FontAwesomeIcon icon={faTrashAlt} /></p>
        </Col>
      </Row>
      )
    }
  }

export default LineItem;
