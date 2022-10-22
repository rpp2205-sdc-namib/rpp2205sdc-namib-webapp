import React from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';


function YourOutfit (props) {
  return(
    <div id="outfit">
      <div data-testid="outfit">YourOutfit</div>
      <button>Prev</button>
      <div id="card" onClick={(e) => {props.add; props.interaction(e.target)}}>
        <FontAwesomeIcon icon={faPlus} />
        <p>Add to Outfit</p>
      </div>
      {props.list.map((element, index) => {
        return(
          <RPC action={false} key={index} remove={props.removeProd}
            info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
          />
        )
      })}
      <button>Next</button>
    </div>
  )
}

export default withClickData(YourOutfit, 'Related Items & Comparison');