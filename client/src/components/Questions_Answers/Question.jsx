import React from 'react';
import ModalWindow from './ModalWindow.jsx';

// this class handles each question for the specific product
class Question extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in question: ', props)

    this.state = {
      helpfulness: props.question.question_helpfulness,
      isFormShown: false
    }

    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
    this.closeQuestionForm = this.closeQuestionForm.bind(this);
  }

  handleAddAnswer() {
    // adding an answer to the question.
    // opens up a modal window that contains a form to submit the answer
    this.setState({
      isFormShown: true
    });
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
    this.setState({
      helpfulness: this.state.helpfulness + 1
    });
  }

  closeQuestionForm() {
    this.setState({
      isFormShown: false
    })
  }

  render() {
    return (
      <div>
        <p>Q: {this.props.question.question_body}</p>
        <div>Helpful?</div>
        <div onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></div>
        <div onClick={this.handleAddAnswer}>Add Answer</div>
        {this.state.isFormShown && <ModalWindow questionBody={this.props.question.question_body} closeQuestionForm={this.closeQuestionForm} />}
      </div>
    )
  }
}

export default Question;