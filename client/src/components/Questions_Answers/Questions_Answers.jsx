import React from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import Search from './Search.jsx';
import ModalWindow from './ModalWindow.jsx';
import axios from 'axios';

// this class is top-level component for Questions_Answers

class Questions_Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QAs: [],
      question_id_1: '',
      question_id_2: '',
      top2Questions: [],
      allAnswersForFirstQuestion: [],
      allAnswersForSecondQuestion: [],
      top2AnswersForFirstQuestion: [],
      top2AnswersForSecondQuestion: [],
      hasMoreThanTwoQuestions: false,
      isQuestionFormShown: false,
      isAnswerFormShown: false,
      whichForm: ''
    }

    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.getAnswersForSpecificQuestionId = this.getAnswersForSpecificQuestionId.bind(this);
    this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidMount() {
    // get all questions
    this.getAllQuestions(() => {
      this.getAnswersForSpecificQuestionId(this.state.question_id_1, 1, () => {
        if (this.state.question_id_2) {
          this.getAnswersForSpecificQuestionId(this.state.question_id_2, 2, null)
        }
      })
    })
  }

  getAllQuestions(callback) {
    return axios.get(`/qa/questions/${this.props.productId}`)
    .then(data => {
      var results = data.data.results;
      this.setState({
        QAs: results,
        top2Questions: (results.length < 2) ? [results[0]] : [results[0], results[1]],
        question_id_1: results[0] ? results[0].question_id : null,
        question_id_2: results[1] ? results[1].question_id : null,
        hasMoreThanTwoQuestions: results.length > 2
      }, callback)
    })
  }

  getAnswersForSpecificQuestionId(questionId, index, callback) {
    return axios.get(`/qa/questions/${questionId}/answers`)
    .then(data => {
      var results = data.data.results;
      if (index === 1) {
        this.setState({
          allAnswersForFirstQuestion: results,
          top2AnswersForFirstQuestion: (results.length < 2) ? [results[0]] : [results[0], results[1]]
        }, callback)
      } else {
        this.setState({
          allAnswersForSecondQuestion: results,
          top2AnswersForSecondQuestion: (results.length < 2) ? [results[0]] : [results[0], results[1]]
        }, callback)
      }
    })
  }

  handleShowMoreQuestions() {
    // show up to 2 additional questions
  }

  handleAddQuestion() {
    // allows user to create a new question for the product
    // opens modal window
    this.setState({
      whichForm: 'question',
      isQuestionFormShown: true
    });
  }

  handleAddAnswer() {
    this.setState({
      whichForm: 'answer',
      isAnswerFormShown: true
    });
  }

  closeForm() {
    this.setState({
      isQuestionFormShown: false,
      isAnswerFormShown: false,
    });
  }

  render() {
    return (
      <div>
        <Search />
        {this.state.top2Questions.map((qa, index) => {
          if (index === 0) {
            return (
              <div key={qa.question_id}>
              <Question
                question={qa}
                handleAddAnswer={this.handleAddAnswer}
                isAnswerFormShown={this.state.isAnswerFormShown}
                productName={this.props.productName}
                whichForm={this.state.whichForm}
                closeForm={this.closeForm} />
              {this.state.top2AnswersForFirstQuestion.length &&
                <Answers
                  allAnswersForFirstQuestion={this.state.allAnswersForFirstQuestion}
                />
              }
            </div>
            )
          } else {
            return (
              <div key={qa.question_id}>
              <Question
                question={qa}
                handleAddAnswer={this.handleAddAnswer}
                isAnswerFormShown={this.state.isAnswerFormShown}
                productName={this.props.productName}
                whichForm={this.state.whichForm}/>
              {this.state.top2AnswersForSecondQuestion.length &&
                <Answers
                  allAnswersForSecondQuestion={this.state.allAnswersForSecondQuestion}
                />
              }
              </div>
            )
          }
        })}
        {this.state.hasMoreThanTwoQuestions &&
          <button onClick={this.handleShowMoreQuestions}>More Answered Questions</button>
        }
        <button onClick={this.handleAddQuestion}>Add Question</button>
        {this.state.isQuestionFormShown &&
          <ModalWindow
            closeForm={this.closeForm}
            productName={this.props.productName}
            whichForm={this.state.whichForm}
          />}
      </div>
    )
  }
}

export default Questions_Answers;