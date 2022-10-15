import React from 'react';
import RPC from './related-product-cards.jsx';

function YourOutfit (props) {
  return(
    <div id="outfit">
      <div data-testid="outfit">YourOutfit</div>
      <button onClick={props.add}>+ Add Product</button>
      {props.list.map((element, index) => {
        return(
          <RPC action={false} key={index} remove={props.removeProd}
            info={JSON.parse(localStorage.getItem(element))}
          />
        )
      })}
    </div>
  )
}

export default YourOutfit;