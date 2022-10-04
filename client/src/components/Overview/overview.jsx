import React from 'react';
import ProductInfo from './product-info.jsx';
import ImageGallary from './image-gallary.jsx';
import StyleSelector from './style-selector.jsx';
import AddToCart from './add-to-cart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <ImageGallary />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />

    </div>)

  }
}

export default Overview;