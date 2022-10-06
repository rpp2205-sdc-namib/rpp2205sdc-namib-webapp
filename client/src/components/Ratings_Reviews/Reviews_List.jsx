import React from 'react';
import Individual_Review_Tile from './Individual_Review_Tile.jsx';
const axios = require('axios');

class Reviews_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      reviews: null,
      toggle: true
    };

    //this.retrieve = this.retrieve.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // retrieve() {
  //   axios.get('/reviews/71698/25/1/newest')
  //     .then(results => {
  //       console.log('results', results);
  //       this.setState({ data: results, reviews: results.data.results }, () => { console.log('reviews', this.state.reviews); })
  //     })
  //     .catch(error => { console.error(error); });
  // }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  // componentDidMount() {
  //   this.retrieve();
  // }

  render() {
    if (!this.state.toggle) {
      return (
        <div>
          <div>Reviews_List</div>
          <Individual_Review_Tile reviews={this.props.reviews}/>
          <button onClick={this.handleClick}>
            More Reviews
          </button>
        </div>
      );
    }

    return (
      <div>
        <div data-testid="text">Reviews_List</div>
        <button onClick={this.handleClick}>
          More Reviews
        </button>
      </div>
    );
  }
}

export default Reviews_List;