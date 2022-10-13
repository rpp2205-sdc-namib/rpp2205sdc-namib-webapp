import React from 'react';
import ModalWindow from './ModalWindow.jsx';

// this class handles each question for the specific product
class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulness: props.question.question_helpfulness,
      isFormShown: false
    }

    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
  }

  handleAddAnswer(isClicked) {
    // adding an answer to the question.
    // opens up a modal window that contains a form to submit the answer
    this.props.handleAddAnswer(isClicked);
  }

  handleIncreaseCounts() {
    // increase the count of helpfulness
    this.setState({
      helpfulness: this.state.helpfulness + 1
    });
  }

  render() {
    console.log('form2: ', this.props.whichForm.length)
    return (
      <div>
        <p>Q: {this.props.question.question_body}</p>
        <div>Helpful?</div>
        <div onClick={this.handleIncreaseCounts}>Yes<span>{this.state.helpfulness}</span></div>
        <button onClick={() => this.handleAddAnswer(true)}>Add Answer</button>
        {this.props.isAnswerFormShown && this.props.whichForm.length !== 0 &&
          <ModalWindow
            questionBody={this.props.question.question_body}
            productName={this.props.productName}
            closeForm={this.props.closeForm}
            whichForm={this.props.whichForm} />}
      </div>
    )
  }
}

export default Question;