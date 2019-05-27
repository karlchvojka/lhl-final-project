import React, { Component } from "react";
import LineItem from "./line-item.js";

class LineItemsContainer extends Component {
  render() {
    return (
      <div className="lineItemsContainer">
        {this.props.line_items.map(item => (
          <LineItem
            key={item.id}
            line_item_creator={item.user_id}
            name={item.name}
            price={item.amount}
            user={this.props.user}
            total_members={this.props.total_members}
          />
        ))}
      </div>
    );
  }
}

export default LineItemsContainer;
