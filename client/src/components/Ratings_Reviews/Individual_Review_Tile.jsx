import React from 'react';
import Stars from '../FiveStars.jsx';

class Individual_Review_Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeDateFormat = this.changeDateFormat.bind(this);
  }

  changeDateFormat(date) {
    var myDate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return month[myDate.getMonth()] + ' ' + (myDate.getDate() + 1).toString() + ', ' + myDate.getFullYear().toString();
  }

  render() {
    console.log('reviews - Individual_Review_Tile');
    console.log('rating', this.props.review.rating);
    return (
      <div className="tile">
        <div><Stars rating={this.props.review.rating}/></div>
        <div><h4>{this.props.review.summary}</h4></div>
        <div className="tile-user">{this.props.review.reviewer_name}</div>
        <div className="tile-date">{this.changeDateFormat(this.props.review.date)}</div>
        <div>{this.props.review.body}</div>
        <div>Recommend: {this.props.review.recommend.toString()}</div>
        <div>Response to Review: {this.props.review.response}</div>
        <div>Rating Helpfulness: {this.props.review.helpfulness}</div>
        <div><hr /></div>
      </div>
    )
  }
}

export default Individual_Review_Tile;


{/*
<div>Photos: {this.props.review.photos}</div>
 */}