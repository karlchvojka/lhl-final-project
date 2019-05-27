import React, { Component } from 'react';
import LineItem from './line-item.js';

class LineItemsContainer extends Component {
  render() {
    return (
      <div className="lineItemsContainer">
        {this.props.line_items.map(item => <LineItem key={item.id} name={item.name} price={item.amount} /> ) }
      </div>
      )
    }
  }

  export default LineItemsContainer;
