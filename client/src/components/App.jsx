import React from 'react';
import Overview from './Overview/overview.jsx';
import Ratings_Reviews from './Ratings_Reviews/Ratings_Reviews.jsx';
import axios from 'axios';
import { totalReviewsAndAvgRating } from './helperFunctions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentProductId: '71697', //let's set this default value of current product id
                  rating: 0,
                  totalReviews: 0};
    this.handleProductIdChange.bind(this);
  }

  componentDidMount() {
    var productId = '71697';
    axios.get(`/reviews/meta/${productId}`)
      .then(response => {
        var reviewsAndRating = totalReviewsAndAvgRating(response.data.ratings);
        this.setState({rating: reviewsAndRating[1],
                       totalReviews: reviewsAndRating[0]})
      })

  }

  handleProductIdChange(newId) {
    //can be used by all components for product ID change
    this.setState({currentProductId: newId})
  }

  render() {
    return (
      <div>
        <Overview productId={this.state.currentProductId} handleProductIdChange={this.handleProductIdChange} rating={this.state.rating} totalReviews={this.state.totalReviews}/>
        <Ratings_Reviews />
      </div>
    )
  }
}

export default App;