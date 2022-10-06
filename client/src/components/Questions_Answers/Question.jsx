import React from 'react';

// this class handles each question for the specific product
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: 0
    }
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
  }

  handleAddAnswer() {
    // adding an answer to the question.
    // opens up a modal window that contains a form to submit the answer
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
  }


  render() {
    console.log('props: ', this.props.question)
    if (!this.props.question) return null;
    return (
      <div>
        <p>Q: {this.props.question.question_body}</p>
        <div>Helpful?</div>
        <div onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></div>
        <div onClick={this.handleAddAnswer}>Add Answer</div>
      </div>
    )
  }
}

export default Question;