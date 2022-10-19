import React from 'react';
import Modal from './Modal.jsx';
import Stars from '../FiveStars.jsx';
import { FiCheck } from "react-icons/fi";

class Individual_Review_Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyTextLength: 250,
      expanded: false,
      isOpen: false,
      helpfulness: props.review.helpfulness,
      isYesClicked: false,
      //isReported: false,
      imgSrc: null
    };

    this.changeDateFormat = this.changeDateFormat.bind(this);
    this.setIsOpen = this.setIsOpen.bind(this);
    this.handleIncreaseCounts = this.handleIncreaseCounts.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow= 'unset';
    }
  }

  changeDateFormat(date) {
    var myDate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return month[myDate.getMonth()] + ' ' + (myDate.getDate() + 1).toString() + ', ' + myDate.getFullYear().toString();
  }

  setIsOpen(boolean, imgUrl) {
    this.setState({
      isOpen: boolean,
      imgSrc: imgUrl
    })
  }

  // handleReport() {
  //   // change the text to "Reported"
  //   this.setState({
  //     isReported: true
  //   });
  // }

  handleIncreaseCounts() {
    // increase the count of helpfulness
    this.setState({
      isYesClicked: true,
      helpfulness: this.state.helpfulness + 1
    });
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
            return (
              <a key={photo.id} >
                <div className="review_photo" onClick={() => {this.setIsOpen(true, photo.url)}}>
                  <img className="review_photo" src={photo.url}/>
                </div>
              </a>
            )
           })
          }
        </div>
        {this.props.review.recommend === true ?
          <div className="review_recommend">
            <FiCheck fontSize=".85em"/>
            <p className="review_recommend">I recommend this product</p>
          </div> :
          null
        }
        <div>Response to Review: {this.props.review.response}</div>
        <div>
          <p>
            Helpful?
            <button className="review_yes_button"
              disabled={this.state.isYesClicked}
              onClick={this.handleIncreaseCounts}>
              Yes ({this.state.helpfulness})
            </button>
          </p>
        </div>
        <div><hr /></div>
        {this.state.isOpen ? <Modal setIsOpen={this.setIsOpen} imgSrc={this.state.imgSrc}/> : null}
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