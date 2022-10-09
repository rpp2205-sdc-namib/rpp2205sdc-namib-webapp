import React from 'react';

// this class handles each answer for the specific product
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: props.answer.helpfulness,
      isReported: false
    }

    this.handleReport = this.handleReport.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
  }

  handleReport() {
    // change the text to "Reported"
    this.setState({
      isReported: !this.state.isReported
    });
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
    this.setState({
      helpfulness: this.state.helpfulness + 1
    });
  }

  render() {
    return (
      <div>
        <p>A: {this.props.answer.body}</p>
        <div>by User: {this.props.answer.answerer_name}</div>
        <div>date: {this.props.answer.date}</div>
        <div>Helpful?</div>
        <div onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></div>
        {this.state.isReported ? <div onClick={this.handleReport}>Reported</div> : <div onClick={this.handleReport}>Report</div>}
      </div>
    )
  }
}

export default Answer;