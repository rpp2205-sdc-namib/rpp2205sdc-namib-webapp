import React from 'react';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      nickname: '',
      email: '',
    }

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleNickNameChange = this.handleNickNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUploadPhotos = this.handleUploadPhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
  }

  handleAnswerChange(value) {
    this.setState({
      answer: value
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

  handleSubmit() {

  }

  validateUserInput() {
    // need to add more
    return this.state.answer.length && this.state.nickname.length && this.state.email.length;
  }

  render() {
    return (
      <div className="modal-container">
        <span onClick={this.props.closeQuestionForm}>&times;</span>
        <h2>Submit your Answer</h2>
        <h4>Product Name _ {this.props.questionBody}</h4>
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
        <button onClick={this.handleSubmit}>Submit answer</button>
      </div>
    )
  }
}

export default ModalWindow;