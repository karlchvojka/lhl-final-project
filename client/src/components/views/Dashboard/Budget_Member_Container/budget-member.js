import React, { Component } from "react";

class BudgetMember extends Component {
  render() {
    const { member } = this.props;
    const { first, last, email } = member;
    return (
      <div>
        {first} {last} {email}
      </div>
    );
  }
}

export default BudgetMember;
