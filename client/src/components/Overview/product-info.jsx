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
      return (<div className="product-info">
        <Stars rating={this.props.rating}/>
        <div id="ratingScore"><p>{this.props.rating}</p></div>
        <div id="readAllReviews"><p>{this.props.totalReviews > 0 ? 'Read All ' + this.props.totalReviews + ' Reviews' : null}</p></div>
        <div id="category"><p>{this.state.currentProduct.category}</p></div>
        <div id="title"><p>{this.state.currentProduct.name}</p></div>
        <div className="price">
          <p id="saleprice">{this.props.priceInfo.sale_price ? ('$' + this.props.priceInfo.sale_price) : null}</p>
          <p id="originalprice">{this.props.priceInfo.sale_price ? <strike>{'$' + String(this.props.priceInfo.original_price)}</strike> : '$' + this.props.priceInfo.original_price}</p>
        </div>

        {/* <div id="overview"><p>{this.state.currentProduct.description}</p></div> */}
      </div>)
    }


  }
}

export default ProductInfo;