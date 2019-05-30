import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class LineItemsForm extends Component {
  render() {
    return (
      <Row id="addItemForm" className={this.props.visbilityClass ? 'showForm' : 'hiddenForm'}>
        <Col className="noGutters" xl={12} lg={12} md={12} sm={12} xs={12}>
          <form id="create-new-item-form" onSubmit={this.props.handleFormSubmit}>
            <Container fluid="true" className="noGutters">
              <Row>
                <Col xl={5} lg={5} md={5} sm={2} xs={12}>
                  <p>New Budget Item Name:</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={12}>
                  <input type="text" name="name" />
                </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={5} xs={12}>
                  <p>New Budget Item Amount:</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={7} xs={12}>
                  <input type="number" name="amount" />
                </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={8} xs={8}>
                  <p>Did you pay the full amount?</p>
                </Col>
                <Col xl={7} lg={7} md={7} sm={4} xs={4}>
                  <input type="checkbox" name="paid" placeholder="(ie. Toilet Paper, Cleaning Suplies, etc.)" />
                </Col>
              </Row>
              <Row>
                <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                  <input type='hidden' name="budget_id" value={1} />
                </Col>
                <Col xl={7} lg={7} md={7} sm={12} xs={12}>
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <input className="addItemSubmit" type="submit" value="Add Item" />
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
