import React from 'react';
import RPC from './related-product-cards.jsx';
import { FaBeer } from 'react-icons/fa'

function YourOutfit (props) {
  return(
    <div id="outfit">
      <div data-testid="outfit">YourOutfit</div>
      <div id="card" onClick={props.add}>

      {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
        + Add to Outfit
      </div>
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