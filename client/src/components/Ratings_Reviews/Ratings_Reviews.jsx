import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      rating: this.props.rating,
      totalReviews: this.props.totalReviews
    };
  }

  render() {
    return (
      <div>
        <Rating_Breakdown rating={this.state.rating} totalReviews={this.state.totalReviews}/>
        <Reviews_List reviews={this.state.reviews} totalReviews={this.state.totalReviews}/>
      </div>
    )
  }
}

export default Ratings_Reviews;