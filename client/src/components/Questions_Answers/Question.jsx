import React from 'react';

// this class handles each question for the specific product
class Question extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props)
    this.state = {
      helpfulness: props.question.question_helpfulness
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
    this.setState({
      helpfulness: this.state.helpfulness + 1
    })
  }

  render() {
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