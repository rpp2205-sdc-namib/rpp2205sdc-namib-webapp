import React from 'react';
import Stars from '../FiveStars.jsx';
const axios = require('axios');

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.retrieve = this.retrieve.bind(this);
    // this.averageReview = this.averageReview.bind(this);
    // this.numberOfReviews = this.numberOfReviews.bind(this);
  }

  // retrieve() {
  //   axios.get('/reviews/meta/71698')
  //     .then(results => {
  //       console.log('results', results);
  //       this.setState({ meta: results }, () => { console.log(this.state.meta); })
  //     })
  //     .catch(error => { console.error(error); });
  // }

  // averageReview(ratings) {
  //   console.log('ratings', ratings);
  //   var total = 0;
  //   var count = 0;
  //   for (var key in ratings) {
  //     total += parseInt(key) * parseInt(ratings[key]);
  //     count += parseInt(ratings[key]);
  //   }

  //   var trueAverage = total/count;
  //   var average = Math.round(trueAverage * 10) / 10;
  //   return average;
  // }

  // numberOfReviews(ratings) {
  //   var count = 0;
  //   for (var key in ratings) {
  //     count += parseInt(ratings[key]);
  //   }
  //   return count;
  // }

  // componentDidMount() {
  //   this.retrieve();
  // }

  render() {
      return (
        <div>
          <div>Average rating for one specific product.</div>
          <div>{this.props.rating}</div>
          <Stars rating={this.props.rating}/>
          <div>Total Reviews: {this.props.numOfReviews}</div>
        </div>
      )
    }
}

export default Rating_Breakdown;

//<Stars rating={this.averageReview(this.state.meta.data.ratings)}/>

// if (!this.state.meta) {
//   console.log('test, meta is null');
// } else {