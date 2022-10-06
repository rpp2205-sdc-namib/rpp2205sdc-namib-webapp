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
    this.state = {styleId: '', priceInfo: {}, styleObj: {}};
  }

  handleStyleIdChange(newId) {

  }

  componentDidMount() {
    axios.get(`/products/${this.props.productId}/styles`)
      .then(response => {
        var defaultStyle = response.data.results.find(style => style["default?"]);
        console.log(defaultStyle)
        this.setState({styleId: defaultStyle.style_id,
                       priceInfo: {original_price: defaultStyle.original_price, sale_price: defaultStyle.sale_price},
                       styleObj: defaultStyle});
      })
  }

  render() {
    if (this.state.styleId === '') {
      return null;
    } else {
      return (<div>
        <ImageGallary />
        <ProductInfo productId={this.props.productId} styleId={this.state.styleId} rating={this.props.rating}
        totalReviews={this.props.totalReviews} priceInfo={this.state.priceInfo} />
        <StyleSelector styleId={this.state.styleId} changeStyle={this.handleStyleIdChange.bind(this)}/>
        <AddToCart styleId={this.state.styleId}/>

      </div>)
    }


  }
}

export default Overview;