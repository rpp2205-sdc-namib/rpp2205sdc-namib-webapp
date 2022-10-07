import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';
import { avgRating, numberOfReviews } from './helperFunctions.jsx';
import axios from 'axios';

class Ratings_Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reviews: {}, rating: 0, numOfReviews: 0};
  }

  componentDidMount() {
    var id = this.props.productId;
    console.log('id', id);
    var promises = [axios.get(`/reviews/${id}`, { params: { count: 8 } }),
                    axios.get(`/reviews/meta/${id}`)];
    Promise.all(promises)
      .then(resultArr => {
        this.setState({reviews: resultArr[0].data.results,
                       rating: avgRating(resultArr[1].data.ratings),
                       numOfReviews: numberOfReviews(resultArr[1].data.ratings)
                      }, () => {console.log('reviews - test', this.state.reviews)})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Rating_Breakdown rating={this.state.rating} numberOfReviews={this.state.numOfReviews}/>
        <Reviews_List reviews={this.state.reviews}/>
        {//<Reviews_List reviews={this.state.reviews}/>
        /* <Product_Breakdown />
        <Sort_Options />
        <Invidiual_Review_Tile />
        <Write_New_Review /> */}
      </div>
    )
  }
}

export default Ratings_Reviews;