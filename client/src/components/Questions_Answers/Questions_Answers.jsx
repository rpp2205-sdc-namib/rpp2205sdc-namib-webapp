import React from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import Search from './Search.jsx';
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
      hasMoreThanTwoQuestions: true,
    }

    this.handleMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  componentDidMount() {
    // get all questions
    axios.get(`/qa/questions/${this.props.productId}`)
      .then(async data => {
        this.setState({
          QAs: data.data.results,
          top2Questions: [data.data.results[0], data.data.results[1]],
          question_id_1: data.data.results[0].question_id || null,
          question_id_2: data.data.results[1].question_id || null,
        },
        () => {
          axios.get(`/qa/questions/${this.state.question_id_1}/answers`)
          .then(data => {
            this.setState({
              allAnswersForFirstQuestion: data.data.results,
              top2AnswersForFirstQuestion: [data.data.results[0], data.data.results[1]]
            }, () => {
              axios.get(`/qa/questions/${this.state.question_id_2}/answers`)
              .then(data => {
                this.setState({
                  allAnswersForSecondQuestion: data.data.results,
                  top2AnswersForSecondQuestion: [data.data.results[0], data.data.results[1]]
                })
              })
            })
          })
        });
      })
  }

  handleShowMoreQuestions() {
    // show up to 2 additional questions
  }

  handleAddQuestion() {
    // allows user to create a new question for the product
    // opens modal window

  }

  render() {
    return (
      <div>
        <Search />
        {this.state.top2Questions.map(qa => {
          return (
            <>
              <Question question={qa} />
              {this.state.top2AnswersForFirstQuestion.length && this.state.top2AnswersForSecondQuestion.length &&
                <Answers
                  allAnswersForFirstQuestion={this.state.allAnswersForFirstQuestion}
                  allAnswersForSecondQuestion={this.state.allAnswersForSecondQuestion}
                />
              }
            </>
          )
        })}
        {this.state.hasMoreThanTwoQuestions &&
          <button onClick={this.handleShowMoreQuestions}>More Answered Questions</button>
        }
        <button onClick={this.handleAddQuestion}>Add Question</button>
      </div>
    )
  }
}

export default Questions_Answers;