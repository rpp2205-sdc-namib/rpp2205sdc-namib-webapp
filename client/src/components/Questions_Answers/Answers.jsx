import React from 'react';
import Answer from './Answer.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.sortAnswers = this.sortAnswers.bind(this);
    this.sortBySeller = this.sortBySeller.bind(this);
  }

  sortAnswers(callback, index) {
    let results = this.props[index]
    .filter(callback)
    .sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });

    return results;
  }

  sortBySeller(index) {
    let sellerSorted = this.sortAnswers((answer) => {
      return answer.answerer_name === 'Seller';
    }, index);

    let notSellerSorted = this.sortAnswers((answer) => {
      return answer.answerer_name !== 'Seller';
    }, index);

    let results = sellerSorted.concat(notSellerSorted);
    return results;
  }

  render() {
    if (this.props.allAnswersForFirstQuestion) {
      return (
        <div>
          {this.sortBySeller('allAnswersForFirstQuestion').map((answer, index) => {
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
          {this.sortBySeller('allAnswersForSecondQuestion').map((answer, index) => {
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
