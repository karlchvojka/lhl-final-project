import React, { Component } from "react";

class LineItem extends Component {
  render() {
    const { budget_members, item } = this.props;
    const { user_id, amount, name } = item;
    const yourShare = item.paid ? amount * -1 : amount * 1;
    const lineItemCreator = budget_members.find(function(element) {
      if (user_id === element.id) {
        return element;
      }
    });
    console.log("TCL: LineItem -> render -> lineItemCreator", lineItemCreator);
    return (
      <div>
        <p>
          {lineItemCreator.first} {lineItemCreator.last}: {name}: Total:{" $"}{" "}
          {amount} Your Share:{" $"} {item.paid ? "" : "+"}
          {(yourShare / budget_members.length).toFixed(2)}
        </p>
      </div>
    );
  }
}

export default LineItem;
