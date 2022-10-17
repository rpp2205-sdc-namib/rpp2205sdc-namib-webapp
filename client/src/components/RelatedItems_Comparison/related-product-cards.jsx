import React from 'react';
import Stars from '../FiveStars.jsx';
import Action from './action.jsx';

function RPC (props) {

  if(props.info.length === 0) {
    return ('')
  } else {
    if(props.info.defaultStyle.sale_price === null) {
      var price = props.info.defaultStyle.original_price;
    } else {
      var price = props.info.defaultStyle.sale_price;
    }
    if(props.info.defaultStyle.photos[0].thumbnail_url === null) {
      var photo = './img/NoImageThumbnail.png';
    } else {
      var photo = props.info.defaultStyle.photos[0].thumbnail_url;
    }
    return(
      <div id="card" >
        <Action id={props.info.product.id} actionButton={props.action} showModal={props.show} removeProd={props.remove}/>
        <div onClick={ () => {props.redirect(props.info.product.id)}}>
          <p>
            <img className="rpcThumbnails" src={photo}></img>
          </p>
          <p>{props.info.product.category}</p>
          <p>{props.info.product.name}</p>
          <p>{price}</p>
          <Stars rating={props.info.rating}/>
        </div>
      </div>
    )
  }
}

export default RPC;