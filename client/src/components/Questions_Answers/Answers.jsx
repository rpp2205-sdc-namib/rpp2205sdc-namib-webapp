import React from 'react';
import Answer from './Answer.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.allAnswersForFirstQuestion.map((answer, index) => {
          if (index > 1) return;
          return (
            <>
              <Answer answer={answer} />
            </>
          )
        })}
        {this.props.allAnswersForSecondQuestion.map((answer, index) => {
          if (index > 1) return;
          return (
            <>
              <Answer answer={answer} />
            </>
          )
        })}
      </div>
    )
  }
}

export default Answers;