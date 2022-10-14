import React from 'react';
import axios from 'axios';

class RPC extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: ''
    }
  }

  componentDidMount() {

  }

  render () {
    //console.log(this.props.info.defaultStyle.photos[0])
    if(!this.props.info.defaultStyle) {
      return ('')
    } else {
      if(this.props.info.defaultStyle.sale_price === null) {
        var price = this.props.info.defaultStyle.original_price;
      } else {
        var price = this.props.info.defaultStyle.sale_price;
      }
      return(
        <div id="card">
          <button onClick={this.props.show}>Star button</button>
          <p>
            <img className="rpcThumbnails" src={this.props.info.defaultStyle.photos[0].thumbnail_url}></img>
          </p>
          <p>{this.props.info.product.category}</p>
          <p>{this.props.info.product.name}</p>
          <p>{price}</p>
          <p>Rating</p>
        </div>
      )
    }
  }

}

export default RPC;