import React from 'react';
import Stars from '../FiveStars.jsx';
import { totalReviewsAndAvgRating } from './helperFunctions.jsx';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: 0,
      totalReviews: 0,
      currentProduct: {},
      currentStyles: {}
      };
  }

  componentDidMount() {
    var id = this.props.productId;
    var promises = [axios.get(`/products/${id}`),
                    axios.get(`/products/${id}/styles`),
                    axios.get(`/reviews/meta/${id}`)];
    Promise.all(promises)
      .then(resultArr => {
        var totalReviews_avgRating = totalReviewsAndAvgRating(resultArr[2].data.ratings);
      this.setState({currentProduct: resultArr[0].data,
                     currentStyles: resultArr[1].data.results,
                     rating: totalReviews_avgRating[1],
                     totalReviews: totalReviews_avgRating[0]})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (<div>
      <Stars rating={this.state.rating}/>
      <div id="readAllReviews"><p>{this.state.totalReviews > 0 ? 'Read All ' + this.state.totalReviews + ' Reviews' : null}</p></div>
      <div id="category"><p>{this.state.currentProduct.category}</p></div>
      <div id="title"><p>{this.state.currentProduct.name}</p></div>
      <div id="overview"><p>{this.state.currentProduct.description}</p></div>

    </div>)

  }
}

export default ProductInfo;