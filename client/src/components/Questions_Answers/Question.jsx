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
    this.closeForm = this.closeForm.bind(this);
  }

  handleAddAnswer() {
    this.setState({
      isFormShown: true
    });
  }

  closeForm() {
    this.setState({
      isFormShown: false
    });
  }

  handleIncreaseCounts() {
    this.setState({
      helpfulness: this.state.helpfulness + 1
    });
  }

  render() {
    return (
      <div className="question_container">
        <p className="question">Q: {this.props.question.question_body}</p>
        <div>
          <div className="helpful_text">Helpful?</div>
          <button className="yes_button"
            onClick={this.handleIncreaseCounts}>Yes
          </button>
          <div className="helpfulness_number">({this.state.helpfulness})</div>
          <div className="division">|</div>
          <button
            className="add_answer_button"
            onClick={this.handleAddAnswer}>Add Answer
          </button>
        </div>
        {this.state.isFormShown &&
          <ModalWindow
            questionBody={this.props.question.question_body}
            productName={this.props.productName}
            closeForm={this.closeForm}
          />}
      </div>
    )
  }
}

export default Question;