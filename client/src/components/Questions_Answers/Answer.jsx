import React from 'react';

// this class handles each answer for the specific product
class Answer extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in answer: ', props)
    this.state = {
      helpfulness: props.answer.helpfulness,
      isYesClicked: false,
      isReported: false
    }

    this.handleReport = this.handleReport.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
    this.handleDateFormat = this.handleDateFormat.bind(this);
  }

  handleReport() {
    // change the text to "Reported"
    this.setState({
      isReported: true
    });
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
    this.setState({
      isYesClicked: true,
      helpfulness: this.state.helpfulness + 1
    });
  }

  handleDateFormat(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let d = new Date(date);
    let day = d.getDate();
    let month = monthNames[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  render() {
    return (
      <div>
        <p>A: {this.props.answer.body}</p>
        <div>by {this.props.answer.answer_name === "Seller" ? "Seller" : this.props.answer.answerer_name}</div>
        <div>{this.handleDateFormat(this.props.answer.date)}</div>
        <div>Helpful?</div>
        <button disabled={this.state.isYesClicked} onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></button>
        {this.state.isReported ? <button disabled={this.state.isReported} onClick={this.handleReport}>Reported</button> : <button onClick={this.handleReport}>Report</button>}
      </div>
    )
  }
}

export default Answer;