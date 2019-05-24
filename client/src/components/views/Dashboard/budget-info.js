import React, { Component } from 'react';

class BudgetInfo extends Component {
  // let { budget, line_items, budget_members, sumObjectValues} = props;

  render() {
      const totals = this.props.sumObjectValues(this.props.line_items, 'amount') 
      return (
      <div className="budgetInfo">
          <p>Budget Info Top Nav Component</p>
          <p>Budget name: {this.props.budget.name}</p>
          <p>Budget total: {this.props.line_items.reduce((total, item) => total + item.amount, 0)}</p>
          <p>Budget total alt calc: {totals}</p>
          <p>Line Items: {this.props.line_items.map(item => <span>{item.name}</span>)}</p>
          <p>Budget Members: {this.props.budget_members.map(bm => <span>{bm.user_id}</span>)}</p>
        </div>
    )
  }
}

export default BudgetInfo;
