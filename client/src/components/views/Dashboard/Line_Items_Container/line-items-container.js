import React, { Component } from "react";
import LineItem from "./line-item.js";
import { Container, Row, Col } from "react-bootstrap";
import LineItemsForm from './line-items-form.js'

class LineItemsContainer extends Component {
  render() {
    return (
      <Row className="lineItemsContainer">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container>
            <LineItemsForm handleFormSubmit={this.props.handleFormSubmit}/>
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
