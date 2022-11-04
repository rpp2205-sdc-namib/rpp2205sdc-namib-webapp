import { useState, useEffect } from 'react';
import axios from 'axios';
import withClickData from '../hoc_click_data.jsx';
import config from './config.js';

const ModalWindow = (props) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState();
  const [imageFiles, setImageFiles] = useState([]);
  const [imageFormData, setImageFormData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateImageData = (files) => {
    let formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', config.CLOUD_PRESET);

    let src = URL.createObjectURL(files[0])
    let srcArray = imageFiles.concat(src);
    let formDataArray = imageFormData.concat(formData);

    setImageFiles(srcArray);
    setImageFormData(formDataArray);
  }

  const uploadPhotos = () => {
    let promises = [];
    for (var i = 0; i < imageFormData.length; i++) {
      let request = axios.post(`https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/image/upload`, imageFormData[i]);
      promises.push(request);
    }

    return Promise.all(promises)
    .then(responseArr => {
      return responseArr.map(res => {
        return res.data.secure_url;
      })
    })
    .catch(err => {
      console.log('err: ', err)
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
    let isAnswerValid = answer.length !== 0 && !isContainOnlyWhiteSpace(answer);
    let isQuestionValid = question.length !== 0 && !isContainOnlyWhiteSpace(question);
    let isNicknameValid = nickname.length !== 0 && !isContainOnlyWhiteSpace(nickname);
    let isEmailValid = email.length !== 0 && !isContainOnlyWhiteSpace(email) && validateEmail(email);
    let totalValid = (isAnswerValid || isQuestionValid) && isNicknameValid && isEmailValid;

    setIsValid(totalValid);
    return totalValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateUserInput()) {
      if (answer.length !== 0) {
        uploadPhotos()
        .then(data => {
          submitForm(`/qa/questions/${props.questionId}/answers`, {
            body: answer,
            name: nickname,
            email: email,
            photos: data
          }, e.target)
        })
      } else if (question.length !== 0) {
        submitForm(`qa/questions`, {
          body: question,
          name: nickname,
          email: email,
          product_id: props.productId
        })
      }
    }
  }

  const submitForm = (url, parameter, e) => {
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
    setIsValid(false);
    setIsSubmitted(false);
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
          <div>
            <form onSubmit={handleSubmit}>
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
                onChange={(e) => handleNickNameChange(e.target.value)}
              />
              <p className="sub_text">For privacy reasons, do not use your full name or email address</p>
              <label htmlFor="email">Your Email</label>
              <input
                className="email"
                id="email"
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Example: jack@email.com"
              />
              <p className="sub_text">For authentication reasons, you will not be emailed</p>
              {props.questionBody && imageFiles.length < 5 &&
                <div className="upload_button">
                  <label className="upload_text">
                  <input type="file" onChange={(e) => generateImageData(e.target.files)} multiple/>Upload your photos
                  </label>
                </div>
              }
              {imageFiles.map((image, index) => <img key={image} src={image} className="upload_image"/> )}
              <input
                type="submit"
                value={props.questionBody !== undefined ? 'Submit answer' : 'Submit question'}
                className="submit_button"
              />
            </form>
            {isValid === false ?
             <>
              <p className={`form_warning${email.length ? '_format_error' : ''}`}>You must enter the following: </p>
              <div className="form_warning">{getInvalidFields().map(f => {
                if (f[0] === 'email' && email.length && !validateEmail(email)) {
                  return <li key={f}>Your email does not meet the right format</li>
                }
                if (f.length === 0) return <></>
                return <li key={f[0]}>{f[0]}</li>
              })}
              </div>
             </>
            :
              <div></div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default withClickData(ModalWindow, 'questions_answers');
