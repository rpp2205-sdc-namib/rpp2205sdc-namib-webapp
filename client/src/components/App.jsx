import React from 'react';
import Overview from './Overview/overview.jsx';
import Ratings_Reviews from './Ratings_Reviews/Ratings_Reviews.jsx';
import axios from 'axios';
import { totalReviewsAndAvgRating } from './helperFunctions.jsx';
import Questions_Answers from './Questions_Answers/Questions_Answers.jsx';
import RPList from './RelatedItems_Comparison/rp-list.jsx'
import YourOutfit from './RelatedItems_Comparison/your-outfit.jsx';
import Modal from './RelatedItems_Comparison/modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentProductId: '',
                  rating: 0,
                  totalReviews: 0,
                  showModal: false
                };
    this.handleProductIdChange.bind(this);
  }

  componentDidMount() {
    var productId = '71697';
    axios.get(`/reviews/meta/${productId}`)
      .then(response => {
        var reviewsAndRating = totalReviewsAndAvgRating(response.data.ratings);
        this.setState({rating: reviewsAndRating[1],
                       totalReviews: reviewsAndRating[0],
                       currentProductId: productId});
      })

  }

  handleClick(e) {
    e.preventDefault();
    this.setState({showModal: true});
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({showModal: false});
  }

  handleProductIdChange(newId) {
    //can be used by all components for product ID change
    this.setState({currentProductId: newId})
  }

  render() {
    //only render the children components after componentDidMount() is completed fetching data from server
    if (this.state.currentProductId === '') {
      return null;
    }
    return (
      <div >
        <Overview productId={this.state.currentProductId} handleProductIdChange={this.handleProductIdChange} rating={this.state.rating} totalReviews={this.state.totalReviews}/>
        <Ratings_Reviews productId={this.state.currentProductId} handleProductIdChange={this.handleProductIdChange}/>
        <RPList show={this.handleClick.bind(this)} productId={this.state.currentProductId}/>
        {this.state.showModal ? (<Modal open={this.state.showModal} closeModal={this.handleClose.bind(this)} />) : ('')}
        <YourOutfit />
        <Questions_Answers productId={this.state.productId} />
      </div>
    )
  }
}

export default App;