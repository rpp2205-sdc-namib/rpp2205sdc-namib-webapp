import React from 'react';
import ProductInfo from './product-info.jsx';
import ImageGallary from './image-gallary.jsx';
import StyleSelector from './style-selector.jsx';
import AddToCart from './add-to-cart.jsx';
import axios from 'axios';
import Stars from '../FiveStars.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {styleId: '', priceInfo: {}, styleObj: {}, styles: []};
  }

  handleStyleIdChange(newId) {
    axios.get(`/products/${this.props.productId}/styles`)
    .then(response => {
      var styleObj = newId === undefined ? response.data.results.find(style => style["default?"]) : response.data.results.find(style => style.style_id === newId);
      this.setState({styleId: styleObj.style_id,
                     priceInfo: {original_price: styleObj.original_price, sale_price: styleObj.sale_price},
                     styleObj: styleObj,
                     styles: response.data.results});
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentDidMount() {
    this.handleStyleIdChange();
  }

  render() {
    if (this.state.styleId === '') {
      return null;
    } else {
      return (<div className="overview">
        <ImageGallary photos={this.state.styleObj.photos}/>
        <ProductInfo productId={this.props.productId} rating={this.props.rating}
        totalReviews={this.props.totalReviews} priceInfo={this.state.priceInfo} />
        <StyleSelector productId={this.props.productId} styleObj={this.state.styleObj} styles={this.state.styles} changeStyle={this.handleStyleIdChange.bind(this)} styleId={this.state.styleId}/>
        <AddToCart styleObj={this.state.styleObj}/>
      </div>)
    }


  }
}

export default Overview;