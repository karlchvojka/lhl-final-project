import React, { Component } from 'react';

class LineItemsForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleFormSubmit}>
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
    )
  }
}

export default LineItemsForm;
