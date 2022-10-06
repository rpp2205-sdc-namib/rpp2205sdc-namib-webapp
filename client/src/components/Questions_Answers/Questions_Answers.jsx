import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Search from './Search.jsx';

// this class is top-level component for Questions_Answers

class Questions_Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreThanTwoQuestions: true
    }
    this.handleMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
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
        <div>
          <Question />
          <Answer />
          <Answer />
        </div>
        <div>
          <Question />
          <Answer />
          <Answer />
        </div>
        {this.state.hasMoreThanTwoQuestions &&
          <button onClick={this.handleShowMoreQuestions}>More Answered Questions</button>
        }
        <button onClick={this.handleAddQuestion}>Add Question</button>
      </div>
    )
  }
}

export default Questions_Answers;