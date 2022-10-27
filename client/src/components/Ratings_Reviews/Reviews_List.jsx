import React from 'react';
import Individual_Review_Tile from './Individual_Review_Tile.jsx';
import Write_New_Review from './Write_New_Review.jsx';
import axios from 'axios';
import withClickData from '../hoc_click_data.jsx';

class Reviews_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      limitReached: false,
      sortOption: 'relevance',
      reviews: this.props.reviews,
      modalOpen: false,
      tiles: 2
    };

    this.handleClick = this.handleClick.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidUpdate(prevState) {
    if (prevState.productId !== this.props.productId) {
      this.setState({
        productId: this.props.productId,
        limitReached: false,
        sortOption: 'relevance',
        reviews: this.props.reviews,
        tiles: 2
      })
    }

    if (prevState.totalReviews !== this.props.totalReviews) {
      this.setState({
        productId: this.props.productId,
        limitReached: false,
        sortOption: 'relevance',
        reviews: this.props.reviews,
        tiles: 2
      })
    }
  }

  handleClick(e) {
    if (e === 'closed') {
      this.setState({
        modalOpen: false
      })
    } else {
    e.preventDefault();
    if (e.target.className === "add_review") {
      this.setState({
        modalOpen: true
      })
    }
    else {
      this.setState({
        tiles: this.state.tiles+=2
      }, () => {
        if (this.state.tiles >= this.props.totalReviews) {
          console.log('limit reached');
          this.setState({
            limitReached: true
          })
        }
      })
    }
    this.props.interaction(e.target);
  }
  }

  sort(e) {
    var sort = e.target.value;
    var count = 500;
    if (sort === this.state.sortOption) {
      return null
    } else {
      axios.get(`/reviews/${this.state.productId}/${count}/${sort}`)
        .then((results) => {
          this.setState({
            reviews: results.data.results,
            sortOption: sort,
            limitReached: false,
            tiles: 2
          })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    if (this.state.limitReached || (this.props.totalReviews > 0 && this.props.totalReviews <= 2)) {
      return (
        <div className="reviews_list">
        <div className="sort_options">
          <strong>{this.props.totalReviews} reviews, sorted by</strong>
          <select id="review_list_select" value={this.state.sortOption} onChange={(e) => {this.sort(e)}}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className={`reviews${this.state.tiles > 4 ? '_expand_mode' : ''}`}>
          <div>
            {this.state.reviews.slice(0, this.state.tiles).map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
          {this.state.modalOpen ? <Write_New_Review handleClick={this.handleClick} productId={this.props.productId} currentProduct={this.props.currentProduct} reviewsMeta={this.props.reviewsMeta}/> : <div></div>}
          <button onClick={this.handleClick} data-testid="add_review_button" className="add_review">Add Review</button>
        </div>
      </div>
      );
    }

    return (
      <div className="reviews_list">
        <div className="sort_options">
          <strong>{this.props.totalReviews} reviews, sorted by</strong>
          <select id="review_list_select" value={this.state.sortOption} onChange={(e) => {this.sort(e)}}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className={`reviews${this.state.tiles > 4 ? '_expand_mode' : ''}`}>
          <div data-testid="tiles">
            {this.state.reviews.slice(0, this.state.tiles).map(review => {
              return (
                <Individual_Review_Tile review={review} key={review.review_id}/>
              )
            })}
          </div>
        </div>
        {this.state.modalOpen ? <Write_New_Review handleClick={this.handleClick} productId={this.props.productId} currentProduct={this.props.currentProduct} reviewsMeta={this.props.reviewsMeta}/> : <div></div>}
        <button onClick={this.handleClick} data-testid="more_button" className="more_reviews">More Reviews</button>
        <button onClick={this.handleClick} data-testid="add_review_button" className="add_review">Add Review</button>
      </div>
    );
  }
}

export default withClickData(Reviews_List, 'ratings_and_reviews');