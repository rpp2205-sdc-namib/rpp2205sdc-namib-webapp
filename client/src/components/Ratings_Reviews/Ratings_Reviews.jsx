import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredReviews: [],
      isToggled: false,
      value: null
    };

    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        filteredReviews: []
      })
    }
  }

  filterReviews(e) {
    console.log('Ratings_Reviews.jsx - filterReviews() has been called', e);
    console.log(e.target.innerText[0]);
    const value = parseInt(e.target.innerText[0]);
    const reviews = this.props.reviews;
    const results = reviews.filter(result => {
      if (result.rating === parseInt(value)) {
        return result;
      }
    });

    if (this.state.isToggled && value === this.state.value) {
      this.setState({
        filteredReviews: [],
        isToggled: false,
        value: null
      })
    } else if (this.state.filteredReviews.length > 0 ){
      const results2 = this.state.filteredReviews.concat(results);
      console.log('testing 1 2 3');
      this.setState({
        filteredReviews: results2,
        isToggled: true,
        value: value
      }, () => {console.log(this.state.filteredReviews)})
    } else {
      this.setState({
        filteredReviews: results,
        isToggled: true,
        value: value
      }, () => {console.log(this.state.filteredReviews)})
    }

  }

  render() {
    return (
      <div className="review_container">
        <Rating_Breakdown productId={this.props.productId} rating={this.props.rating} ratings={this.props.ratings} totalReviews={this.props.totalReviews} totalRatings={this.props.totalRatings} filterReviews={this.filterReviews}/>
        <Reviews_List productId={this.props.productId} reviews={this.state.filteredReviews.length > 0 ? this.state.filteredReviews : this.props.reviews} totalReviews={this.state.filteredReviews.length > 0 ? this.state.filteredReviews.length : this.props.totalReviews}/>
      </div>
    )
  }
}

export default Ratings_Reviews;