import React, { useState, useContext } from "react";
import LineItem from "./line-item.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineItemsForm from './line-items-form.js';
import {StateContext} from '../index.js'

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-plaza.css'

const LineItemsContainer = props  => {

  const [formVisible, setformVisible] = useState(false);

  const handleClick = () => {
    setformVisible(
      !formVisible
    );
  }

  const stateContext = useContext(StateContext);
  const { lineitems } = stateContext;
  
  return (
    <Row className="lineItemsContainer">
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <Container fluid="true">
          <Row className="addFormButtonRow">
            <Col className="noGutters" xl={6} lg={6} md={6} sm={6} xs={6}>
              <Button className="addItems Butto ml-auto" onClick={handleClick} variant="primary">{formVisible ? 'Close' : 'New Item'} <FontAwesomeIcon icon={formVisible ? faChevronUp : faChevronDown} /></Button>
            </Col>
            <Col className="yourTotal" xl={6} lg={6} md={6} sm={6} xs={6}>
              <div style={{ textAlign: 'right' }}><span>You owe:</span> $ <Odometer animation="count" format="(,ddd).dd" duration={1500} value={props.currentUserSubtotal} /></div>
            </Col>
          </Row>
          <LineItemsForm
            visbilityClass={formVisible}
            handleFormSubmit={props.handleFormSubmit}
          />
          {lineitems.map(item => (
            <LineItem
              key={item.id}
              user={props.user}
              budget_members={props.budget_members}
              item={item}
              handleLineItemDelete={props.handleLineItemDelete}
              handleLineItemUpdate={props.handleLineItemUpdate}
            />
          ))}
        </Container>
      </Col>
    </Row>
  );
}

export default LineItemsContainer;
