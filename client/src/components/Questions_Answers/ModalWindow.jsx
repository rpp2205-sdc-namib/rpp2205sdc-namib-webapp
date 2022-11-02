import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import withClickData from '../hoc_click_data.jsx';
import config from './config.js';

const ModalWindow = (props) => {
  const [answer, setAnswer] = useState('');
  const [isAnswerValid, setIsAnswerValid] = useState(false);
  const [question, setQuestion] = useState('');
  const [isQuestionValid, setIsQuestionValid] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [uploadedImagesUrl, setUploadedImagesUrl] = useState([]);
  const [uploadCounts, setUploadCounts] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUploadPhotos = (files) => {
    let formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', config.CLOUD_PRESET);

    axios.post(`https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/image/upload`, formData)
    .then(response => {
      let url = response.data.secure_url;
      setUploadedImagesUrl(uploadedImagesUrl.concat(url));
      setUploadCounts(uploadCounts + 1);
    })
    .catch(err => {
      console.log('failed to upload the image');
    })
  }

  const handleAnswerChange = (value) => {
    setAnswer(value);
  }
  const handleQuestionChange = (value) => {
    setQuestion(value);
  }
  const handleNickNameChange = (value) => {
    setNickname(value);
  }
  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const validateEmail = (email) => {
    let result = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return result !== null;
  }

  const isContainOnlyWhiteSpace = (value) => {
    return value.trim().length === 0;
  }

  const validateUserInput = () => {
    (answer.length !== 0 && !isContainOnlyWhiteSpace(answer)) ? setIsAnswerValid(true) : setIsAnswerValid(false);
    (question.length !== 0 && !isContainOnlyWhiteSpace(question)) ? setIsQuestionValid(true) : setIsQuestionValid(false);
    (nickname.length !== 0 && !isContainOnlyWhiteSpace(nickname)) ? setIsNicknameValid(true) : setIsNicknameValid(false);
    (email.length !== 0 && !isContainOnlyWhiteSpace(email) && validateEmail(email)) ? setIsEmailValid(true) : setIsEmailValid(false);
    let totalValid = (isAnswerValid || isQuestionValid) && isNicknameValid && isEmailValid;

    setHasError(!totalValid);
    return totalValid
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.interaction(e.target);
    if (validateUserInput()) {
      if (isAnswerValid) {
        submitForm(`/qa/questions/${props.questionId}/answers`, {
          body: answer,
          name: nickname,
          email: email,
          photos: uploadedImagesUrl
        })
      } else if (isQuestionValid) {
        submitForm(`qa/questions`, {
          body: question,
          name: nickname,
          email: email,
          product_id: props.productId
        })
      }
    }
  }

  const submitForm = (url, parameter) => {
    axios.post(url, parameter)
    .then(data => {
      setIsSubmitted(true);
    })
    .catch(err => {
      console.log('Failed to send the form')
    })
  }

  const getInvalidFields = () => {
    let fields;

    if (props.questionBody) {
      fields = [
        ['answer', answer.length !== 0],
        ['nickname', nickname.length !== 0],
        ['email', email.length && validateEmail(email)]
      ];
    } else {
      fields = [
        ['question', question.length !== 0],
        ['nickname', nickname.length !== 0],
        ['email', email.length && validateEmail(email)]
      ];
    }

    return fields.filter(field => {
      if (!field[1]) return field[0];
    });
  }

  const closeForm = () => {
    props.closeForm();
    setHasError(false);
    setIsSubmitted(false);
    setIsEmailValid(false);
  }

  return (
    <div className="modal_container">
      <div className="modal_content">
        <span className="modal_close" onClick={closeForm}>&times;</span>
        {isSubmitted ?
          <div>
            <p>Your request has been submitted!</p>
            <button onClick={props.closeForm}>Close</button>
          </div>
          :
          <form>
            {props.questionBody ? <h2>Submit Your Answer</h2> : <h2>Ask Your Question</h2>}
            {props.questionBody ? <h4>{props.productName}: {props.questionBody}</h4> : <h4>About the {props.productName}</h4>}
            {props.questionBody ?
              <div>
                <label htmlFor="answer_body">Your Answer:</label>
                <input type="text" id="answer_body" className="text_answer" maxLength="1000" onChange={(e) => handleAnswerChange(e.target.value)} />
              </div>
            :
              <div>
                <label htmlFor="question_body">Your Question:</label>
                <input type="text" id="question_body" className="text_question" maxLength="1000" onChange={(e) => handleQuestionChange(e.target.value)} />
              </div>
            }
            <label htmlFor="nickname">What is your nickname?</label>
            <input
              className="nickname"
              placeholder={props.questionBody ? "jackson11!" : "Example: jack543!"}
              maxLength="60"
              id="nickname"
              onChange={(e) => handleNickNameChange(e.target.value)} />
            <p className="sub_text">For privacy reasons, do not use your full name or email address</p>
            <label htmlFor="email">Your Email</label>
            <input
              className="email"
              id="email"
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="Example: jack@email.com"/>
            <p className="sub_text">For authentication reasons, you will not be emailed</p>
            {props.questionBody && uploadCounts < 5 &&
              <div className="upload_button">
                <label className="upload_text">
                <input type="file" onChange={(e) => handleUploadPhotos(e.target.files)} multiple/>Upload your photos
                </label>
              </div>
            }
            {uploadedImagesUrl.map(url => (
              <img key={url} src={url} className="upload_image"/>
            ))}
            <input
              type="submit"
              value={props.questionBody !== undefined ? 'Submit answer' : 'Submit question'}
              className="submit_button"
              onClick={handleSubmit} />
            {hasError && !email.length && <p className="form_warning">You must enter the following: </p>}
            {hasError ?
              <div className="form_warning">{getInvalidFields().map(f => {
                if (f[0] === 'email' && email.length && !isEmailValid) {
                  return <li>Your email does not meet the right format</li>
                }
                if (f.length === 0) return <></>
                return <li key={f[0]}>{f[0]}</li>
              })}
              </div>
           :
            <></>}
          </form>
        }
      </div>
    </div>
  )
}

export default withClickData(ModalWindow, 'questions_answers');
