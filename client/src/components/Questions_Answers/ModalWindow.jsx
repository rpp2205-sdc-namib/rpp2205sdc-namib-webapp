import React from 'react';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props)

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

  // both
  handleNickNameChange(value) {
    this.setState({
      nickname: value
    });
  }

    // both
  handleEmailChange(value) {
    this.setState({
      email: value
    });
  }

  // add an answer
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
    let isNicknameValid = this.state.answer.length !== 0;
    let isEmailValid = this.state.email.length !== 0 && this.validateEmail(this.state.email) !== null;

    this.setState({
      isEmailValidated: isEmailValid,
      hasError: !isAnswerValid || !isNicknameValid || !isEmailValid
    });
  }

  getInvalidFields() {
    let fields = [['answer', this.state.answer.length !== 0], ['nickname', this.state.nickname.length !== 0], ['email', this.state.isEmailValidated]];
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
        <h2>Submit your Answer</h2>
        <h4>Product Name _ {this.props.productName}</h4>
        Your Answer*
        <textarea
          maxLength="1000"
          onChange={(e) => this.handleAnswerChange(e.target.value)}>
        </textarea>
        What is your nickname?*
        <input
          placeholder="Example: jack543!"
          maxLength="60"
          onChange={(e) => this.handleNickNameChange(e.target.value)}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
        Your Email*
        <input
          onChange={(e) => this.handleEmailChange(e.target.value)}
          placeholder="Example: jack@email.com"
        />
        <p>For authentication reasons, you will not be emailed</p>
        <button onClick={this.handleUploadPhotos}>Upload your photos</button>
        <button onClick={this.validateUserInput}>Submit answer</button>
        {this.state.hasError ? <div>You must enter the following: {this.getInvalidFields().map(f => <div key={f}>{f}</div>)}</div> : <></>}
      </div>
    )
  }
}

export default ModalWindow;