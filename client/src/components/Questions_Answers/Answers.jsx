import React from 'react';
import Answer from './Answer.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.allAnswersForFirstQuestion) {
      return (
        <div>
          {this.props.allAnswersForFirstQuestion.map((answer, index) => {
            if (index > 1) return;
            return (
              <div key={answer.answer_id}>
                <Answer answer={answer} />
              </div>
          )
        })}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.allAnswersForSecondQuestion.map((answer, index) => {
            if (index > 1) return;
            return (
              <div key={answer.answer_id}>
                <Answer answer={answer} />
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default Answers;