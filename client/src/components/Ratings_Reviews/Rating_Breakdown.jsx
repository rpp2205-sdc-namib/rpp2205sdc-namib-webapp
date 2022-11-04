import Stars from '../FiveStars.jsx';
import Product_Breakdown from './Product_Breakdown.jsx';
import withClickData from '../hoc_click_data.jsx';

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['5']),
      fourStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['4']),
      threeStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['3']),
      twoStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['2']),
      oneStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['1']),
      recommendationPercentage: this.recommendationPercentage(this.props.reviews),
      isToggled: [0,0,0,0,0],
      messages: []
    };

    this.recommendationPercentage = this.recommendationPercentage.bind(this);
    this.percentageOfTotalReviews = this.percentageOfTotalReviews.bind(this);
    this.filterNotification = this.filterNotification.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        fiveStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['5']),
        fourStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['4']),
        threeStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['3']),
        twoStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['2']),
        oneStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['1']),
        recommendationPercentage: this.recommendationPercentage(this.props.reviews),
        isToggled: [0,0,0,0,0],
        messages: []
      })
    }
  }

  recommendationPercentage(reviews) {
    let count = 0;
    let total = reviews.length;

    reviews.filter(review => {
      if (review.recommend === true) {
        count++;
      }
    })
    return `${parseFloat(count/total).toFixed(2)*100}%`
  }

  percentageOfTotalReviews(totalRatings, totalSpecificRatings) {
    const percentageOfTotalSpecificRatings = `${parseFloat(totalSpecificRatings/totalRatings).toFixed(2)*100}%`
    return percentageOfTotalSpecificRatings;
  }

  filterNotification(e) {
    const value = parseInt(e.target.innerText[0]);
    var messages = []

    if (this.state.isToggled[value - 1] === 1) {
      this.state.isToggled[value - 1] = 0;
    } else {
      this.state.isToggled[value - 1] = 1;
    }

    for (var i = this.state.isToggled.length-1; i > -1; i--) {
        if (this.state.isToggled[i] === 1) {
          messages.push(`${i + 1} stars`);
        }
    }

    this.setState({
      messages: messages
    }, () => {console.log(this.state.messages)})

    this.props.interaction(e.target);
  }

  clearMessages() {
    this.setState({
      isToggled: [0,0,0,0,0],
      messages: []
    })
  }

  render() {
    return (
      <div className="ratings_breakdown">
        <strong>Ratings and Reviews</strong>
        <div data-testid="star_rating" className="star_rating">
          <div className="star_rating_text">{this.props.rating}</div>
          <div className="star_output"><Stars rating={this.props.rating}/></div>
        </div>
        <div>Total Ratings: {this.props.totalRatings}</div>
        <div>{this.state.recommendationPercentage} of reviews recommend this product</div>
        <div className="filter_ratings_message">
          {this.state.messages.length > 0 ? (<div>Filtered By: </div>) : (<div></div>)}
          {this.state.messages.map((message, index) => {return <div key={index}>{message}</div>})}
        </div>
        {this.state.messages.length > 0 ? (<div><button onClick={() => {this.props.clearFilter(); this.clearMessages()}}>Clear Filter</button></div>) : (<div></div>)}
        <div className="progress_bars">
          <div>
            <a className="five_star_ratings_bar" style={{float:'left'}} onClick={(e) => {this.props.filterReviews(e); this.filterNotification(e)}}>5 Stars</a>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.fiveStarReviews}`}}>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['5']}</div>
          </div>
          <div>
            <a className="four_star_ratings_bar" style={{float:'left'}} onClick={(e) => {this.props.filterReviews(e); this.filterNotification(e)}}>4 Stars</a>
              <div className="progress">
                <div className="bar" style={{width:`${this.state.fourStarReviews}`}}>
                </div>
              </div>
              <div style={{float:'left'}}>{this.props.ratings['4']}</div>
          </div>
          <div>
            <a className="three_star_ratings_bar" style={{float:'left'}} onClick={(e) => {this.props.filterReviews(e); this.filterNotification(e)}}>3 Stars</a>
              <div className="progress">
                <div className="bar" style={{width:`${this.state.threeStarReviews === 'NaN%' ? '0%' : this.state.threeStarReviews}`}}>
                </div>
              </div>
              <div style={{float:'left'}}>{this.props.ratings['3']}</div>
          </div>
          <div>
            <a className="two_star_ratings_bar" style={{float:'left'}} onClick={(e) => {this.props.filterReviews(e); this.filterNotification(e)}}>2 Stars</a>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.twoStarReviews}`}}>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['2']}</div>
          </div>
          <div>
            <a className="one_star_ratings_bar" style={{float:'left'}} onClick={(e) => {this.props.filterReviews(e); this.filterNotification(e)}}>1 Stars</a>
              <div className="progress">
                <div className="bar" style={{width:`${this.state.oneStarReviews}`}}>
                </div>
              </div>
            <div style={{float:'left'}}>{this.props.ratings['1']}</div>
          </div>
        </div>
        <Product_Breakdown reviewsMeta={this.props.reviewsMeta} />
      </div>
    )
  }
}

export default withClickData(Rating_Breakdown, 'ratings_and_reviews');