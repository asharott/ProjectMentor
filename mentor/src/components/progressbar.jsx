import React, { Component } from "react";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  handleSteps = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };
  render() {
    return (
      <div>
        <div className="StepDotsContainer">
          <div className="stepdot step1"></div>
          <div className="stepdot step2"></div>
          <div className="stepdot step3"></div>
        </div>

        <button onClick={this.handleSteps}>Next Step</button>
      </div>
    );
  }
}

export default ProgressBar;
