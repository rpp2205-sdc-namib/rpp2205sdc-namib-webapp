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
    console.log('clicked');
    this.setState({list: [...this.state.list, this.props.productId]})
  }


  render () {
    return(
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
        <button onClick={this.addProduct.bind(this)}>+ Add Product</button>
        {this.state.list.map(element => {
          return(
            <RPC totalRating={this.props.prodRating} />
          )
        })}
      </div>
    )
  }
}

export default YourOutfit;