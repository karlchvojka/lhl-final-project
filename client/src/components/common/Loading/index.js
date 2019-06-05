import React, { Component } from "react";
import Logo from "../../../assets/Home/feather.svg";


class LoadingSpinner extends Component {
  render() {
    return (
      <div className="loadingSpinner">
        <div className="spinnerContent">
          <img alt="feathers-logo" src={Logo} className="rotate-center" width="200px" />
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}
export default LoadingSpinner;
