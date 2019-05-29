import React, { Component } from "react";
import LineItem from "./line-item.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineItemsForm from './line-items-form.js';

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
              <Col className="noGutters" xl={6} lg={6} md={6} sm={6} xs={6}>
                <Button className="addItems Butto ml-auto" onClick={this.handleClick} variant="primary">{this.state.formVisible ? 'Close' : 'New Item' } <FontAwesomeIcon icon={ this.state.formVisible ? faChevronUp : faChevronDown } /></Button>
              </Col>
              <Col className="yourTotal" xl={6} lg={6} md={6} sm={6} xs={6}>
                <p style={{textAlign: 'right'}}><span>You owe:</span> ${this.props.currentUserSubtotal}</p>
              </Col>
            </Row>
            <LineItemsForm visbilityClass={this.state.formVisible} handleFormSubmit={this.props.handleFormSubmit}/>
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
