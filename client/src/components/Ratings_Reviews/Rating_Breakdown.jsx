import React from 'react';
import Stars from '../FiveStars.jsx';
import axios from 'axios';

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      totalReviews: this.props.totalReviews
    };
  }

  render() {
    return (
      <div>
        <div>Average rating for one specific product.</div>
        <div>{this.state.rating}</div>
        <Stars rating={this.state.rating}/>
      </div>
    )
  }
}

export default Rating_Breakdown;