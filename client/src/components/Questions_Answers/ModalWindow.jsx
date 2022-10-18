import React from 'react';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      question: '',
      nickname: '',
      email: '',
      isEmailValidated: false,
      hasError: false,
    }

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleNickNameChange = this.handleNickNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUploadPhotos = this.handleUploadPhotos.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.getInvalidFields = this.getInvalidFields.bind(this);
  }

  // add an answer
  handleAnswerChange(value) {
    this.setState({
      answer: value
    });
  }

  // add a question
  handleQuestionChange(value) {
    this.setState({
      question: value
    });
  }

  handleNickNameChange(value) {
    this.setState({
      nickname: value
    });
  }

  handleEmailChange(value) {
    this.setState({
      email: value
    });
  }

  handleUploadPhotos() {

  }

  validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  validateUserInput() {
    let isAnswerValid = this.state.answer.length !== 0;
    let isQuestionValid = this.state.question.length !== 0;
    let isNicknameValid = this.state.answer.length !== 0;
    let isEmailValid = this.state.email.length !== 0 && this.validateEmail(this.state.email) !== null;

    this.setState({
      isEmailValidated: isEmailValid,
      hasError: (!isAnswerValid || !isQuestionValid) || !isNicknameValid || !isEmailValid
    })
  }

  getInvalidFields(value) {
    let fields;

    if (value === 'answer') {
      fields = [['answer', this.state.answer.length !== 0], ['nickname', this.state.nickname.length !== 0], ['email', this.state.isEmailValidated]];
    } else {
      fields = [['question', this.state.question.length !== 0], ['nickname', this.state.nickname.length !== 0], ['email', this.state.isEmailValidated]];
    }

    return fields.filter(field => {
      if (field[1] === false) {
        return field[0];
      }
    });
  }

  render() {
    return (
      <div className="modal_content">
        <span className="modal_close" onClick={this.props.closeForm}>&times;</span>
        {this.props.questionBody !== undefined ? <h2>Submit your Answer</h2> : <h2>Ask Your Question</h2>}
        {this.props.questionBody !== undefined ? <h4>{this.props.productName}: {this.props.questionBody}</h4> : <h4>About the {this.props.productName}</h4>}
        {this.props.questionBody !== undefined ?
          <div>
            <label className="label_answer" htmlFor="answer">Your Answer</label>
            <input className="text_answer" maxLength="1000" onChange={(e) => this.handleAnswerChange(e.target.value)} name="answer" />
          </div> :
          <div>
            <label className="label_question" htmlFor="question">Your Question</label>
            <input className="text_question" maxLength="1000" onChange={(e) => this.handleQuestionChange(e.target.value)} name="question" />
          </div>
        }
        <label className="label_nickname" htmlFor="nickname">What is your nickname?</label>
        <input
          className="nickname"
          placeholder={this.state.questionBody !== undefined ? "Example: jack543!" : "jackson11!"}
          name="nickname"
          maxLength="60"
          onChange={(e) => this.handleNickNameChange(e.target.value)} />
        <p className="sub_text">For privacy reasons, do not use your full name or email address</p>
        <label htmlFor="email" className="label_email">Your Email</label>
        <input
          className="email"
          onChange={(e) => this.handleEmailChange(e.target.value)}
          name="email"
          placeholder="Example: jack@email.com"/>
        <p className="sub_text">For authentication reasons, you will not be emailed</p>
        {this.props.questionBody !== undefined && <button className="upload_button" onClick={this.handleUploadPhotos}>Upload your photos</button>}
        <button
          className="submit_button"
          // onClick={() => this.validateUserInput(this.props.whichForm)}>
          onClick={this.validateUserInput}>
          {this.props.questionBody !== undefined ? 'Submit answer' : 'Submit question'}
        </button>
        {this.state.hasError ? <div className="sub_text">You must enter the following: {this.getInvalidFields(this.props.whichForm).map(f => <li key={f}>{f}</li>)}</div> : <></>}
      </div>
    )
  }
}

export default ModalWindow;