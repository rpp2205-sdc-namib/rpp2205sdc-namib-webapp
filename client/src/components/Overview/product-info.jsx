import React from 'react';
import Stars from '../FiveStars.jsx';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      var category = this.props.currentProduct.category;
      var name = this.props.currentProduct.name;
      var description = this.props.currentProduct.description;
      var sale_price = this.props.styleObj.sale_price;
      var original_price = this.props.styleObj.original_price;
      return (<div className="product-info" data-testid="test-ProductInfo">
        <Stars rating={this.props.rating}/>
        <div id="ratingScore"><p>{this.props.rating}</p></div>
        <div id="readAllReviews"><p>{this.props.totalReviews > 0 ? 'Read All ' + this.props.totalReviews + ' Reviews' : null}</p></div>
        <div id="category"><p>{'Category > ' + category}</p></div>
        <div id="title"><p>{'Product Name > ' + name}</p></div>
        <div id="description"><p>{'Description: ' + description}</p></div>
        <div className="price">
          <p id="saleprice">{sale_price ? ('$' + sale_price) : null}</p>
          <p id="originalprice">{sale_price ? <strike>{'$' + String(original_price)}</strike> : '$' + original_price}</p>
        </div>
      </div>)
    }
}

export default ProductInfo;