import React, { Component } from "react";
import LineItem from "./line-item.js";

class LineItemsContainer extends Component {
  render() {
    return (
      <div className="lineItemsContainer">
        {this.props.line_items.map(item => (
          <LineItem
            key={item.id}
            user={this.props.user}
            budget_members={this.props.budget_members}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default LineItemsContainer;
