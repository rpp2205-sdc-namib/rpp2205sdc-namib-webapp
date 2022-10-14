import React from 'react';
import axios from 'axios';
import Stars from '../FiveStars.jsx';
import Action from './action.jsx';

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
    if(!this.props.info) {
      return ('')
    } else {
      if(this.props.info.defaultStyle.sale_price === null) {
        var price = this.props.info.defaultStyle.original_price;
      } else {
        var price = this.props.info.defaultStyle.sale_price;
      }
      return(
        <div id="card">
          <Action id={this.props.info.product.id} actionButton={this.props.action} showModal={this.props.show}/>
          <p>
            <img className="rpcThumbnails" src={this.props.info.defaultStyle.photos[0].thumbnail_url}></img>
          </p>
          <p>{this.props.info.product.category}</p>
          <p>{this.props.info.product.name}</p>
          <p>{price}</p>
          <Stars rating={this.props.info.rating}/>
        </div>
      )
    }
  }

}

export default RPC;