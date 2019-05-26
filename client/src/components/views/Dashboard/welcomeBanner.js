import React, { Component } from 'react';

class BudgetInfo extends Component {
  // let { budget, line_items, budget_members, sumObjectValues} = props;

  render() {
      const totals = this.props.sumObjectValues(this.props.line_items, 'amount')
      return (
      <div className="welcomeBackBanner">

      </div>
    )
  }
}

export default BudgetInfo;
