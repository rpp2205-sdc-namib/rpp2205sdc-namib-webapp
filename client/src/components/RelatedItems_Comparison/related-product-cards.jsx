import React from 'react';
import axios from 'axios';
import Stars from '../FiveStars.jsx';
import Action from './action.jsx';

function RPC (props) {

  if(!props.info) {
    return ('')
  } else {
    if(props.info.defaultStyle.sale_price === null) {
      var price = props.info.defaultStyle.original_price;
    } else {
      var price = props.info.defaultStyle.sale_price;
    }
    return(
      <div id="card" name={props.info.product.id}>
        <Action id={props.info.product.id} actionButton={props.action} showModal={props.show} removeProd={props.remove}/>
        <p>
          <img className="rpcThumbnails" src={props.info.defaultStyle.photos[0].thumbnail_url}></img>
        </p>
        <p>{props.info.product.category}</p>
        <p>{props.info.product.name}</p>
        <p>{price}</p>
        <Stars rating={props.info.rating}/>
      </div>
    )
  }
}

export default RPC;