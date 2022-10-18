import React from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      seeMoreAnswers: false
    }

    this.getAnswers = this.getAnswers.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
    this.handleViewMoreAnswers = this.handleViewMoreAnswers.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);
  }

  async componentDidMount() {
    let answers = await this.getAnswers();
    let sortedAnswers = this.sortAnswers(answers);
    this.setState({
      answers: sortedAnswers
    });
  }

  getAnswers() {
    let questionId = this.props.qa.question_id;
    return axios.get(`/qa/questions/${questionId}/answers`)
    .then(data => {
      return data.data.results
    });
  }

  sortAnswers(data) {
    let sellerSorted = data.filter(answer => {
      return answer.answerer_name === 'Seller'
    }).sort((a, b) => b.helpfulness - a.helpfulness)

    let notSellerSorted = data.filter(answer => {
      return answer.answerer_name !== 'Seller'
    }).sort((a, b) => b.helpfulness - a.helpfulness);

    return sellerSorted.concat(notSellerSorted);
  }

  handleViewMoreAnswers() {
    this.setState({
      seeMoreAnswers: true
    });
  }

  collapseAnswers() {
    this.setState({
      seeMoreAnswers: false
    })
  }

  render() {
    return (
      <div>
        <Question question={this.props.qa} productName={this.props.productName} />
        {this.state.answers.map((answer, index) => {
          if (index > 1) return;
          return (
            <Answer answer={answer} />
          )
        })}
        {this.state.seeMoreAnswers && <div>
          {this.state.answers.map((answer, index) => {
            if (index < 2) return;
            return (
              <div>
                <Answer answer={answer} />
              </div>
            )
        })}</div>}
        {this.state.answers.length > 2 && !this.state.seeMoreAnswers && <button onClick={this.handleViewMoreAnswers}>See more answers</button>}
        {this.state.seeMoreAnswers && <button onClick={this.collapseAnswers}>Collapse answers</button>}
      </div>
    )
  }
}

export default QA;