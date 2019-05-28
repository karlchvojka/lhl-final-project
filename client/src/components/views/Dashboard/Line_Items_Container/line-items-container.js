import React, { Component } from "react";
import LineItem from "./line-item.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineItemsForm from './line-items-form.js'

class LineItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { formVisible: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  render() {

    return (
      <Row className="lineItemsContainer">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container>
            <Row className="addFormButtonRow">
              <Button className="addItems Butto ml-auto" onClick={this.handleClick} variant="primary">Add Item</Button>
            </Row>
            <LineItemsForm visbilityClass={this.state.formVisible}/>
            {this.props.line_items.map(item => (
              <LineItem
                key={item.id}
                user={this.props.user}
                budget_members={this.props.budget_members}
                item={item}
                handleLineItemDelete={this.props.handleLineItemDelete}
                handleLineItemUpdate={this.props.handleLineItemUpdate}
              />
            ))}
          </Container>
        </Col>
      </Row>
    );
  }
}

export default LineItemsContainer;
