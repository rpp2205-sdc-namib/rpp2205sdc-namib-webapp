import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.filterReviews = this.filterReviews.bind(this);
  }

  filterReviews(e) {
    console.log('Ratings_Reviews.jsx - filterReviews() has been called', e);
  }

  render() {
    return (
      <div className="review_container">
        <Rating_Breakdown productId={this.props.productId} rating={this.props.rating} ratings={this.props.ratings} totalReviews={this.props.totalReviews} totalRatings={this.props.totalRatings} filterReviews={this.filterReviews}/>
        <Reviews_List productId={this.props.productId} reviews={this.props.reviews} totalReviews={this.props.totalReviews}/>
      </div>
    )
  }
}

export default Ratings_Reviews;