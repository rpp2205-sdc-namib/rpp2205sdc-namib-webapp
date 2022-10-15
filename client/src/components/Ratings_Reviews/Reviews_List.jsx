import React from 'react';
import Individual_Review_Tile from './Individual_Review_Tile.jsx';

class Reviews_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      totalReviews: this.props.totalReviews,
      displayedReviews: this.props.reviews.slice(0, 2),
      limitReached: false,
      tiles: 4
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      displayedReviews: this.state.reviews.slice(0, this.state.tiles),
      tiles: this.state.tiles+=2
    }, () => {
      if (this.state.displayedReviews.length === this.state.totalReviews) {
        console.log('limit reached');
        this.setState({
          limitReached: true
        })
      }
    })
  }

  render() {
    console.log(this.state.reviews);
    if (this.state.limitReached || (this.state.totalReviews > 0 && this.state.totalReviews <= 2)) {
      return (
        <div>
        <div className={`reviews${this.state.displayedReviews.length > 4 ? '_expand_mode' : ''}`}>
          <div>
            {this.state.displayedReviews.map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
        </div>
      </div>
      );
    }

    return (
      <div>
        <div className={`reviews${this.state.displayedReviews.length > 4 ? '_expand_mode' : ''}`}>
          <div data-testid="tiles">
            {this.state.displayedReviews.map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
        </div>
        <button onClick={this.handleClick}>More Reviews</button>
      </div>
    );
  }
}

export default Reviews_List;


// return (
//   <div className={`answers${this.state.viewAllAnswersForFirstQuestion ? '_expand_mode' : ''}`}>
//     {sortedAllAnswersForFirstQuestion.map((answer, index) => {
//       if (index > 1) return;
//       return (
//         <div key={answer.answer_id}>
//           <Answer answer={answer} />
//         </div>
//       )
//     })}
//     {this.state.viewAllAnswersForFirstQuestion &&
//       <div>
//         {sortedAllAnswersForFirstQuestion.map((answer, index) => {
//         if (index < 2) return;
//         return (
//           <div key={answer.answer_id}>
//             <Answer answer={answer} />
//           </div>
//         )
//       })}
//       </div>}
//       {this.props.allAnswersForFirstQuestion.length > 2 &&
//       <button onClick={() => this.handleViewMoreAnswers('viewAllAnswersForFirstQuestion')}>{this.state.viewAllAnswersForFirstQuestion ? 'Collapse answers' : 'See more answers'}</button>
//       }
//   </div>
// )