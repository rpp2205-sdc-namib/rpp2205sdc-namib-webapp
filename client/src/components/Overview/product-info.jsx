import React from 'react';
import Stars from '../FiveStars.jsx';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentProduct: {}};
  }

  componentDidMount() {
    var id = this.props.productId;
    axios.get(`/products/${id}`)
      .then(response => {
      this.setState({currentProduct: response.data})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (Object.keys(this.state.currentProduct).length === 0) {
      return null;
    } else {
      console.log(this.props.priceInfo)
      return (<div>
        <Stars rating={this.props.rating}/>
        <div id="readAllReviews"><p>{this.props.totalReviews > 0 ? 'Read All ' + this.props.totalReviews + ' Reviews' : null}</p></div>
        <div id="category"><p>{this.state.currentProduct.category}</p></div>
        <div id="title"><p>{this.state.currentProduct.name}</p></div>
        <div id="saleprice"><p>{this.props.priceInfo.sale_price}</p></div>
        <div id="originalprice"><p>{this.props.priceInfo.sale_price ? '$' + this.props.priceInfo.original_price.strike() : '$' + this.props.priceInfo.original_price}</p></div>
        <div id="overview"><p>{this.state.currentProduct.description}</p></div>
      </div>)
    }


  }
}

export default ProductInfo;