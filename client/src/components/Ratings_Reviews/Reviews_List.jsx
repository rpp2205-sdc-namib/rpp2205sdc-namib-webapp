import React from 'react';
import Individual_Review_Tile from './Individual_Review_Tile.jsx';

class Reviews_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      limitReached: false,
      tiles: 2
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevState) {
    if (prevState.productId !== this.props.productId) {
      this.setState({
        productId: this.props.productId,
        tiles: 2,
        limitReached: false
      })
    }

    if (prevState.totalReviews !== this.props.totalReviews) {
      this.setState({
        productId: this.props.productId,
        tiles: 2,
        limitReached: false
      })
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tiles: this.state.tiles+=2
    }, () => {
      if (this.state.tiles >= this.props.totalReviews) {
        console.log('limit reached');
        this.setState({
          limitReached: true
        })
      }
    })
  }

  render() {

    if (this.state.limitReached || (this.props.totalReviews > 0 && this.props.totalReviews <= 2)) {
      return (
        <div className="reviews_list">
        <strong>Total Reviews: {this.props.totalReviews}</strong>
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
      <div className="reviews_list">
        <strong>Total Reviews: {this.props.totalReviews}</strong>
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