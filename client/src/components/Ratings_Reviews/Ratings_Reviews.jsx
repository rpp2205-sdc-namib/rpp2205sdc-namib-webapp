import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Rating_Breakdown productId={this.props.productId} rating={this.props.rating} totalReviews={this.props.totalReviews}/>
        <Reviews_List productId={this.props.productId} reviews={this.props.reviews} totalReviews={this.props.totalReviews}/>
      </div>
    )
  }
}

export default Ratings_Reviews;