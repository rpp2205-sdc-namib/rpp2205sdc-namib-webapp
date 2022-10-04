import React from 'react';
import ProductInfo from './product-info.jsx';
import ImageGallary from './image-gallary.jsx';
import StyleSelector from './style-selector.jsx';
import AddToCart from './add-to-cart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: 2.5}
  }

  render() {
    return (<div>
      <ImageGallary />
      <ProductInfo rating={this.state.rating}/>
      <StyleSelector />
      <AddToCart />

    </div>)

  }
}

export default Overview;