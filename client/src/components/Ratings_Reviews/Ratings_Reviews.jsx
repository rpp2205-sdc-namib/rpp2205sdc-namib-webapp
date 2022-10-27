import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';
import withClickData from '../hoc_click_data.jsx';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredReviews: [],
      isToggled: [0,0,0,0,0]
    };

    this.clearFilter = this.clearFilter.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        filteredReviews: [],
        isToggled: [0,0,0,0,0]
      })
    }
  }

  clearFilter() {
    this.setState({
      filteredReviews: [],
      isToggled: [0,0,0,0,0]
    })
  }

  filterReviews(e) {
    console.log('Ratings_Reviews.jsx - filterReviews() has been called', e);
    console.log(e.target.innerText[0]);
    const value = parseInt(e.target.innerText[0]);
    const reviews = this.props.reviews;
    let results = reviews.filter(result => {
      if (result.rating === value) {
        return result;
      }
    });

    if (this.state.isToggled[value - 1] === 1) {
      results = this.state.filteredReviews.filter(result => {
        if (result.rating !== value) {
          return result;
        }
      });
      this.state.isToggled[value - 1] = 0;
      this.setState({
        filteredReviews: results
      }, () => {console.log(this.state.filteredReviews)});
    } else if (this.state.filteredReviews.length > 0 ) {
      results = this.state.filteredReviews.concat(results);
      this.state.isToggled[value - 1] = 1;
      this.setState({
        filteredReviews: results
      }, () => {console.log(this.state.filteredReviews)});
    } else {
      this.state.isToggled[value - 1] = 1;
      this.setState({
        filteredReviews: results
      }, () => {console.log(this.state.filteredReviews)});
    }

    this.props.interaction(e.target);
  }

  render() {
    return (
      <div className="review_container">
        <Rating_Breakdown productId={this.props.productId} rating={this.props.rating} reviews={this.props.reviews} ratings={this.props.ratings} totalReviews={this.props.totalReviews} totalRatings={this.props.totalRatings} filterReviews={this.filterReviews} clearFilter={this.clearFilter} reviewsMeta={this.props.reviewsMeta}/>
        <Reviews_List productId={this.props.productId} reviews={this.state.filteredReviews.length > 0 ? this.state.filteredReviews : this.props.reviews} totalReviews={this.state.filteredReviews.length > 0 ? this.state.filteredReviews.length : this.props.totalReviews} currentProduct={this.props.currentProduct} reviewsMeta={this.props.reviewsMeta}/>
      </div>
    )
  }
}

export default withClickData(Ratings_Reviews, 'ratings_and_reviews');