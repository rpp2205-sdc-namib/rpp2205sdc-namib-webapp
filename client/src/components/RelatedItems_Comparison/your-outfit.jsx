import React, { useState, useEffect, useLayoutEffect } from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';

function YourOutfit (props) {
  const ref = React.createRef();
  const[start, setStart] = useState(0);
  const [Prev, togglePrev] = useState('');
  const [Next, toggleNext] = useState('');

  const arr = props.list.map((element, index) =>(
    <RPC action={false} key={index} remove={props.removeProd}
      info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
    />
  ));


  useLayoutEffect(()=> {
    if(start.toString() + 'px' === '0px') {
      togglePrev(true);
      console.log();
    }
    if(start.toString() + 'px' !== '0px') {
      togglePrev(false)
    }
    if(ref.current.clientWidth < ref.current.scrollWidth) {
      toggleNext(false);
    }
    if(!(ref.current.clientWidth < ref.current.scrollWidth)) {
      toggleNext(true);
    }
  }, [start, props.list.length, ref])


  return (
    <div data-testid="outfit">YourOutfit
      <div className="main-container">
        {Prev ?
          ('') :
          (<button className="nav Prev" onClick={(e) => { props.interaction(e.target); setStart(start + 300);} }>Prev</button>)
        }
        <div id="carousel-container" ref={ref}>
          <div id="carousel" style={{ transform: `translateX(${start.toString()}px)` }}>
            <div className="card" onClick={(e) => {props.add(e); props.interaction(e.target)}}>
              <FontAwesomeIcon icon={faPlus} />
              <p>Add to Outfit</p>
            </div>
            {arr}
          </div>
          {console.log('here start', start)}
        </div>
        {Next ?
            ('') :
            (<button className="nav Next" onClick={(e) => {
              props.interaction(e.target);
              setStart(start - 300);
            }}>Next</button>)
        }
      </div>
    </div>
  )
}

export default withClickData(YourOutfit, 'Related Items & Comparison');