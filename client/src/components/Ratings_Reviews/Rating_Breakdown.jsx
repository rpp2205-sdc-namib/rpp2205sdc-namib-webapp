import React from 'react';
import Stars from '../FiveStars.jsx';

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['5']),
      fourStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['4']),
      threeStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['3']),
      twoStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['2']),
      oneStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['1'])
    };

    this.percentageOfTotalReviews = this.percentageOfTotalReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        fiveStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['5']),
        fourStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['4']),
        threeStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['3']),
        twoStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['2']),
        oneStarReviews: this.percentageOfTotalReviews(this.props.totalRatings, this.props.ratings['1'])
      })
    }
  }

  percentageOfTotalReviews(totalRatings, totalSpecificRatings) {
    const percentageOfTotalSpecificRatings = `${parseFloat(totalSpecificRatings/totalRatings).toFixed(2)*100}%`
    console.log('Ratings_Breakdown.jsx - percentageOfTotalReviews() - totalRatings', totalRatings);
    console.log('Ratings_Breakdown.jsx - percentageOfTotalReviews() - data3', percentageOfTotalSpecificRatings);
    return percentageOfTotalSpecificRatings;
  }

  render() {
    console.log(this.props.ratings);
    console.log(this.state.fiveStarReviews);
    console.log(this.props.productId);
    return (
      <div className="ratings_breakdown">
        <strong>Ratings and Reviews</strong>
        <div data-testid="star_rating">{this.props.rating}</div>
        <Stars rating={this.props.rating}/>
        <div>Total Ratings: {this.props.totalRatings}</div>
        <div className="progress_bars">
          <a className="star_progress_bar" onClick={() => {this.props.filterReviews()}}>
            <div style={{float:'left'}}>5 Stars</div>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.fiveStarReviews}`}}>
                <p className="percent">{this.state.fiveStarReviews}</p>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['5']}</div>
          </a>
          <a className="star_progress_bar" onClick={(e) => {this.props.filterReviews(e)}}>
            <div style={{float:'left'}}>4 Stars</div>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.fourStarReviews}`}}>
                <p className="percent">{this.state.fourStarReviews}</p>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['4']}</div>
          </a>
          <a className="star_progress_bar" onClick={() => {this.props.filterReviews()}}>
            <div style={{float:'left'}}>3 Stars</div>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.threeStarReviews}`}}>
                <p className="percent">{this.state.threeStarReviews}</p>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['3']}</div>
          </a>
          <a className="star_progress_bar" onClick={() => {this.props.filterReviews()}}>
            <div style={{float:'left'}}>2 Stars</div>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.twoStarReviews}`}}>
                <p className="percent">{this.state.twoStarReviews}</p>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['2']}</div>
          </a>
          <a className="star_progress_bar" onClick={() => {this.props.filterReviews()}}>
            <div style={{float:'left'}}>1 Stars</div>
            <div className="progress">
              <div className="bar" style={{width:`${this.state.oneStarReviews}`}}>
                <p className="percent">{this.state.oneStarReviews}</p>
              </div>
            </div>
            <div style={{float:'left'}}>{this.props.ratings['1']}</div>
          </a>
        </div>
      </div>
    )
  }
}

export default Rating_Breakdown;