import React from 'react';

class Individual_Review_Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('reviews - Individual_Review_Tile', this.props.reviews);
    return (
      <div>
        <div><h2>Individual_Review_Tile</h2></div>
        <div>Star Rating: {this.props.reviews[0].rating}</div>
        <div>Date of Review: {this.props.reviews[0].date}</div>
        <div>Review Summary: {this.props.reviews[0].summary}</div>
        <div>Body: {this.props.reviews[0].body}</div>
        <div>Photos: {this.props.reviews[0].photos}</div>
        <div>Recommend: {this.props.reviews[0].recommend}</div>
        <div>Reviewer Name: {this.props.reviews[0].reviewer_name}</div>
        <div>Response to Review: {this.props.reviews[0].response}</div>
        <div>Rating Helpfulness: {this.props.reviews[0].helpfulness}</div>
      </div>
    )
  }
}

export default Individual_Review_Tile;