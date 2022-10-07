import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Search from './Search.jsx';
import axios from 'axios';

// this class is top-level component for Questions_Answers

class Questions_Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QAs: [],
      hasMoreThanTwoQuestions: true,
    }

    this.handleMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  componentDidMount() {
    // get all questions
    axios.get(`/qa/questions/${this.props.productId}`)
      .then(data => {
        // console.log('data: ', data.data.results)
        this.setState({
          QAs: data.data.results,
        });
      });
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
        {this.state.QAs.map((qa, index) => {
          if (index > 1) return;
          return (
            <div>
              <Question question={qa} />
              <Answer answer={qa} />
              <Answer answer={qa} />
            </div>
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