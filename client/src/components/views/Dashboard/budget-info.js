import React, { Component } from 'react';

class BudgetInfo extends Component {
  // let { budget, line_items, budget_members, sumObjectValues} = props;

  render() {
      return (
      <div className="budgetInfo">
          <p>Budget name: {this.props.budget.name}</p>
          <p>Budget total: {this.props.budget_total}</p>
          <p>Line Items: {this.props.line_items.map(item => <span>{item.name}</span>)}</p>
          <p>Budget Members: {this.props.budget_members.map(bm => <span>{bm.user_id}</span>)}</p>
        </div>
    )
  }
}

export default BudgetInfo;
