import React from 'react';
import Stars from '../FiveStars.jsx';

class Individual_Review_Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyTextLength: 250,
      expanded: false
    };

    this.changeDateFormat = this.changeDateFormat.bind(this);
    this.show = this.show.bind(this);
  }

  changeDateFormat(date) {
    var myDate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return month[myDate.getMonth()] + ' ' + (myDate.getDate() + 1).toString() + ', ' + myDate.getFullYear().toString();
  }

  show() {
    if (this.state.bodyTextLength === this.props.review.body.length) {
      this.setState({
        bodyTextLength: 250,
        expanded: false
      })
    } else if (this.state.bodyTextLength < this.props.review.body.length) {
      this.setState({
        bodyTextLength: this.props.review.body.length,
        expanded: true
      })
    }
  }

  render() {
    console.log('reviews - Individual_Review_Tile');
    console.log('rating', this.props.review.rating);
    return (
      <div className="tile">
        <div><Stars rating={this.props.review.rating}/></div>
        <div><strong>{this.props.review.summary}</strong></div>
        <div className="tile-user">{this.props.review.reviewer_name}</div>
        <div className="tile-date">{this.changeDateFormat(this.props.review.date)}</div>
        <div>{this.props.review.body.slice(0, this.state.bodyTextLength)}</div>
        <div>
          {this.props.review.body.length < this.state.bodyTextLength ? (
            <div></div>
          ) : (
            <p>
              <a className="show_more" onClick={this.show}>
                {this.state.expanded ? (
                   <span>Show less</span>
                 ) : (
                   <span>Show more</span>
                 )
                }
              </a>
            </p>
          )}
        </div>
        <div>
          {this.props.review.photos.map(photo => {
            return <div key={photo.id} className="review_photo">
                     <img className="review_photo" src={photo.url}/>
                   </div>
           })
          }
        </div>
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
 */
}



{/* <div>{this.props.review.body}</div> */}