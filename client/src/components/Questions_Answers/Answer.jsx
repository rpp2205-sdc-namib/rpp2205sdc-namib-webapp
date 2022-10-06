import React from 'react';

// this class handles each answer for the specific product
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: 0
    }
    this.handleReport = this.handleReport.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
  }

  handleReport() {
    // change the text to "Reported"
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
  }

  render() {
    return (
      <div>
        <p>A: </p>
        <div>username: </div>
        <div>date: </div>
        <div>Helpful?</div>
        <div onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></div>
        <div onClick={this.handleReport}>Report</div>
      </div>
    )
  }
}

export default Answer;