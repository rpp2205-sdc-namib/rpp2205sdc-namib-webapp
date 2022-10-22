import React, { useState, useEffect } from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';

function Carousel (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     start: 0,
  //     end: 3,
  //     Prev: true,
  //     arr: []
  //   }
  // }


   const arr = props.list.map((element, index) =>(
      <RPC action={false} key={index} remove={props.removeProd}
        info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
      />
  ));

    return (
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
          {Prev ?
            ('') :
            (<button onClick={(e) => { props.interaction(e.target); }}>Prev</button>)
          }
        <div className="card" onClick={(e) => {props.add(e); props.interaction(e.target)}}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Add to Outfit</p>
        </div>
        {arr.slice(start, end)}
        {console.log('here start', start, 'end', end)}
        {/* {if(end === arr.length) {
          togglePrev(!prev);
        }} */}
        {Next ?
          ('') :
          (<button onClick={(e) => {
            props.interaction(e.target);
          }}>Next</button>)
        }
    </div>
  )
}

export default withClickData(Carousel, 'Related Items & Comparison');