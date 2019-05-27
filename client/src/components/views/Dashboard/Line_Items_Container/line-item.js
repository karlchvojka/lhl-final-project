import React, { Component } from "react";
import LineItemsContainer from "./line-items-container";

class LineItem extends Component {
  render() {
    const { budget_members, item, user } = this.props;
    const { user_id, amount, name } = item;
    const lineItemCreator = budget_members.find(function(element) {
      if (user_id === element.id) {
        return element;
      }
    });
    const yourShare = function name() {
      if (item.paid) {
        if (lineItemCreator.id === user.id) {
          return amount * -1;
        }
      }
      return amount * 1;
    };
    const myShare = yourShare();
    return (
      <div>
        <p>
          {lineItemCreator.first} {lineItemCreator.last}: {name} Total: {amount}{" "}
          Your Share:{" $"}
          {(myShare / budget_members.length).toFixed(2)}
        </p>
      </div>
    );
  }
}

export default LineItem;
