import React, { useState, useEffect } from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';

function Carousel (props) {

  const[start, setStart] = useState(0);
  const[end, setEnd] = useState(3);
  const [Prev, togglePrev] = useState(true);
  const [Next, toggleNext] = useState(true);

   const arr = props.list.map((element, index) =>(
      <RPC action={false} key={index} remove={props.removeProd}
        info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
      />
  ));

  useEffect(()=> {
    if(start === 0) {
      togglePrev(true);
    }
    if(end === arr.length) {
      toggleNext(true);
    }
    if(start > 0) {
      togglePrev(false)
    }
    if(end < arr.length) {
      toggleNext(false);
    }
  }, [start, end, props.list.length])

    return (
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
          {Prev ?
            ('') :
            (<button onClick={(e) => { props.interaction(e.target); setStart(start - 1); setEnd(end - 1);}}>Prev</button>)
          }
        <div className="card" onClick={(e) => {props.add(e); props.interaction(e.target)}}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Add to Outfit</p>
        </div>
        {console.log(arr.length)}
        {arr.slice(start, end)}
        {console.log('here start', start, 'end', end)}
        {Next ?
          ('') :
          (<button onClick={(e) => {
            props.interaction(e.target);
            setStart(start + 1);
            setEnd(end + 1);
          }}>Next</button>)
        }
    </div>
  )
}

export default withClickData(Carousel, 'Related Items & Comparison');