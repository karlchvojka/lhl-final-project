import React, { Component } from "react";

class LineItem extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.line_item_creator}: {this.props.name}:{" $"}
          {(this.props.price / this.props.total_members).toFixed(2)}
        </p>
      </div>
    );
  }
}

export default LineItem;
