import React from 'react';
import Stars from '../FiveStars.jsx';

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Average rating for one specific product.</div>
        <div data-testid="star_rating">{this.props.rating}</div>
        <Stars rating={this.props.rating}/>
        <div>Total Reviews: {this.props.totalReviews}</div>
        <div><hr /></div>
      </div>
    )
  }
}

export default Rating_Breakdown;