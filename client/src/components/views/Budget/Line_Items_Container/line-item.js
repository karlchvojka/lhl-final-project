import React, { Component } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumericInput from 'react-numeric-input';

const numeral = require('numeral');
const validate = ( name, amount ) => {
  const errors = [];

  if (name.length === 0) {
    errors.push("Please enter a name for your item");
  }

  if (amount && amount <= 0) {
    errors.push("Please enter an amount greater than $0.00");
  }

  if (amount === 0) {
    errors.push("Please enter an amount greater than $0.00");
  }

  if (amount === undefined || amount === "" || amount === null) {
    errors.push("Please enter a valid amount");
  }

  return errors;
};

class LineItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      formData: {
        name: "",
        amount: "",
        paid: false,
      },
      errors: []

    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleChange = evt => {
    const { formData } = this.state;
    const { name, type, value, checked } = evt.target;
    this.setState({
        formData: {
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        }
    })
  };

  handleAmountchange = value => {
    const { formData } = this.state;
    console.log("The amount is changing")
    this.setState({ // update errors using setState -- never directly modify a component's state
      formData: {
        ...formData,
        amount: value
      }
    });  
  }

  _reset = () => {
    this.setState({
      formData: {
        name: "",
        amount: "",
        paid: false
      }
    })
  }

  handleEdit(user_id, budget_id) {
    if (this.state.editable) {
      const { formData } = this.state;
      const { name, amount } = formData;
      let id = this.props.item.id
      let paid = this.props.item.paid
      let line_item = { id: id, name: name, amount: amount, user_id: user_id, budget_id: budget_id, paid: paid }
      const errors = validate(name, amount)

      if (errors.length > 0) {
        this.setState({ errors });
        return;
      } else {
        this.setState({ errors });
        // this.props.handleFormSubmit(formData)
        this.props.handleLineItemUpdate(line_item)
        this._reset()
      }
  
    } else {
      this.setState({ 
        formData: {
          name: this.props.item.name,
          amount: this.props.item.amount
        } 
      });
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    const { budget_members, item, user } = this.props;
    const { user_id, amount, name, id, budget_id } = item;
    console.log(budget_members, item, user)
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
    const { errors } = this.state;

    let itemNameField = this.state.editable ? <input type='text' name='name' ref={input => this.name = input} defaultValue={this.props.item.name} onChange={this.handleChange}/>
      : <p className="itemName">{name}</p>

    let itemTotalField = this.state.editable ? <NumericInput 
                                                className="editlineAmount"
                                                step={0.01} 
                                                precision={2}                     
                                                style={false}
                                                defaultValue={this.props.item.amount}
                                                onChange={this.handleAmountchange}
                                              /> 
    // <input type='text' ref={input => this.amount = input} defaultValue={this.props.item.amount} />
      : <p className="itemTotal"><span>Total:</span> {numeral(amount).format('$ 0,0[.]00')}{" "}</p>

    let itemYouOweField = this.state.editable ? <p></p> : <p className="itemOwe" style={myShare < 0 ? { color: "green" } : { color: "red" }}><span>{myShare < 0 ? "Squabbled:" : "You Owe:"}</span>{" "}{numeral(myShare).format('$ 0,0[.]00')}</p>


    return (
      <Row className="lineItem">
        {errors.map(error => (
        <Col key={error} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Alert variant='danger' className="col-12">Error: {error}</Alert>
        </Col>
        ))}
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
          {lineItemCreator.id === user.id ? <p className="icon" onClick={() => this.handleEdit(user.id, budget_id)}>{this.state.editable ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} />}</p> : <p></p>}
          {lineItemCreator.id === user.id ? <p className="icon" onClick={() => this.props.handleLineItemDelete(id)}><FontAwesomeIcon icon={faTrashAlt} /></p> : <p></p>}
        </Col>
      </Row>
    )
  }
}

export default LineItem;
