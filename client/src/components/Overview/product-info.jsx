import React from 'react';
import Stars from '../FiveStars.jsx';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      currentStyles: {}
      };
  }

  componentDidMount() {
    var id = this.props.productId;
    console.log(typeof id);
    var promises = [axios.get(`/products/${id}`),
                    axios.get(`/products/${id}/styles`)];
    Promise.all(promises)
      .then(resultArr => {
      this.setState({currentProduct: resultArr[0].data,
                     currentStyles: resultArr[1].data.results})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (<div>
      <Stars rating={this.props.rating}/>
      <div id="readAllReviews"><p>{this.props.totalReviews > 0 ? 'Read All ' + this.props.totalReviews + ' Reviews' : null}</p></div>
      <div id="category"><p>{this.state.currentProduct.category}</p></div>
      <div id="title"><p>{this.state.currentProduct.name}</p></div>
      <div id="overview"><p>{this.state.currentProduct.description}</p></div>

    </div>)

  }
}

export default ProductInfo;