import React from 'react';
import RPC from './related-product-cards.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  addProduct(e) {
    e.preventDefault();
  }



  render () {
    return(
      <div id="outfit">
        <button >+ Add Product</button>
      </div>
    )
  }
}

export default YourOutfit;