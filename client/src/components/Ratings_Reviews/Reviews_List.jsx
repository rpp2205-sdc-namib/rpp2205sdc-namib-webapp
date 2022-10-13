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
    if (this.state.limitReached) {
      return (
        <div>
          <div>
            <div>Total Reviews: {this.state.totalReviews}</div>
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
        <div className="reviews">
          <div>Total Reviews: {this.state.totalReviews}</div>
          <div data-testid="tiles">
            {this.state.displayedReviews.map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
          <button onClick={this.handleClick}>
            More Reviews
          </button>
        </div>
      </div>
    );
  }
}

export default Reviews_List;