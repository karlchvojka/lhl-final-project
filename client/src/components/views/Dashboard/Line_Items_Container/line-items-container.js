import React, { Component } from 'react';
import LineItem from './line-item.js';

class LineItemsContainer extends Component {
  render() {
    return (
      <div className="lineItemsContainer">
        <p>Line Items: {this.props.line_items.map(item => <LineItem name={item.name} price={item.amount} /> ) }</p>
      </div>
      )
    }
  }

  export default LineItemsContainer;
