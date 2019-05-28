import React, { Component } from "react";
import LineItem from "./line-item.js";

class LineItemsContainer extends Component {
  render() {
    return (
      <div className="lineItemsContainer">
        <form id="create-new-item-form" onSubmit={this.props.handleFormSubmit}>
        <label>
        New Budget Item Name:
        <input type="text" name="name" />
      </label>
      <label>
        New Budget Item Amount:
        <input type="number" name="amount" />
      </label>
      <label>
        Is this an incidental type of expense?
        <input type="checkbox" name="paid" placeholder="(ie. Toilet Paper, Cleaning Suplies, etc.)"/>
      </label>
      <input type='hidden' name="budget_id" value={1} />
      <input type="submit" value="Submit" />
        </form>
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
