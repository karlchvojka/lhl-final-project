import React, { Component } from 'react';
import { Container, Row, Col, Alert} from "react-bootstrap";
import NumericInput from 'react-numeric-input';

const validate = ( name, amount ) => {
  const errors = [];

  console.log("THis is validating", name, amount)

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (amount && amount <= 0) {
    errors.push("Amount can't be $0.00 or less");
  }
  if (amount === undefined || amount === "" || amount === null) {
    errors.push("Amount can't be blank");
  }

  return errors;
};

class LineItemsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        amount: "",
        paid: false,
      },
      errors: []
    }
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
    this.setState({ // update errors using setState -- never directly modify a component's state
      formData: {
        ...formData,
        amount: value
      }
    });  
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const { formData } = this.state;
    const { name, amount } = formData;
    console.log("This is teh name and amount", name, amount)
    const errors = validate(name, amount)

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.setState({ errors });
      this.props.handleFormSubmit(formData)
      this._reset()
    }

  };

  _reset = () => {
    this.setState({
      formData: {
        name: "",
        amount: "",
        paid: false
      }
    })
  }

  render() {
    const { errors } = this.state;

    return (
      <Row id="addItemForm" className={this.props.visbilityClass ? 'showForm' : 'hiddenForm'}>
        <Col className="noGutters" xl={12} lg={12} md={12} sm={12} xs={12}>
          <form id="create-new-item-form" onSubmit={this.handleSubmit}>
            {errors.map(error => (
              <Alert key={error} variant='danger'>Error: {error}</Alert>
            ))}
            <Container fluid="true" className="noGutters">
              <Row>
                <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                  <p>Budget Item Name:</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                  <input 
                    type="text" 
                    name="name" 
                    onChange={this.handleChange}
                    value={this.state.formData.name}
                  />
                 </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                  <p>Budget Item Amount:</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                  <NumericInput 
                    className="lineAmount"
                    step={0.01} 
                    precision={2}                     
                    onChange={this.handleAmountchange}
                    style={false}
                    value={this.state.formData.amount}
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                  <p>Have you paid this full amount?</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                  <input 
                    type="checkbox" 
                    name="paid"
                    onChange={this.handleChange}
                    value={this.state.formData.paid}
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                  <input type='hidden' name="budget_id" value={1} />
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <input  className="addItemSubmit" type="submit" value="Add Item" />
                  {/* disabled={!isEnabled} */}
                </Col>

              </Row>
            </Container>
          </form>
        </Col>
      </Row>
    )
  }
}

export default LineItemsForm;
