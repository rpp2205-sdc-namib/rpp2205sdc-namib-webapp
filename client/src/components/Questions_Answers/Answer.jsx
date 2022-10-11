import React from 'react';

// this class handles each answer for the specific product
class Answer extends React.Component {
  constructor(props) {
    super(props);
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
    let { body, answerer_name, date } = this.props.answer;

    return (
      <div>
        <p>A: {body}</p>
        by<span className={answerer_name === "Seller" ? 'seller' : undefined}>{answerer_name === "Seller" ? "Seller" : answerer_name}</span>
        <div>{this.handleDateFormat(date)}</div>
        <div>Helpful?</div>
        <button disabled={this.state.isYesClicked} onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></button>
        {this.state.isReported ? <button disabled={this.state.isReported} onClick={this.handleReport}>Reported</button> : <button onClick={this.handleReport}>Report</button>}
      </div>
    )
  }
}

export default Answer;