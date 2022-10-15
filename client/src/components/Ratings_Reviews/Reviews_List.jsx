import React from 'react';
import Individual_Review_Tile from './Individual_Review_Tile.jsx';

class Reviews_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedReviews: null,
      limitReached: false,
      tiles: 2
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tiles: this.state.tiles+=2
    }, () => {
      if (this.state.tiles === this.props.totalReviews) {
        console.log('limit reached');
        this.setState({
          limitReached: true
        })
      }
    })
  }

  render() {
    console.log(this.props.reviews);
    if (this.state.limitReached || (this.props.totalReviews > 0 && this.props.totalReviews <= 2)) {
      return (
        <div>
        <div className={`reviews${this.state.tiles > 4 ? '_expand_mode' : ''}`}>
          <div>
            {this.props.reviews.slice(0, this.state.tiles).map(review => {
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
        <div className={`reviews${this.state.tiles > 4 ? '_expand_mode' : ''}`}>
          <div data-testid="tiles">
            {this.props.reviews.slice(0, this.state.tiles).map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
        </div>
        <button onClick={this.handleClick} data-testid="more_button" className="more_button">More Reviews</button>
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