import React, { useState, useEffect, useLayoutEffect } from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';

function YourOutfit (props) {
  const ref = React.createRef();
  const[start, setStart] = useState('0px');
  const[end, setEnd] = useState(3);
  const [Prev, togglePrev] = useState('');
  const [Next, toggleNext] = useState('');
  const [overflow, toggleOverflow] = useState('hidden');

  const arr = props.list.map((element, index) =>(
    <RPC action={false} key={index} remove={props.removeProd}
      info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
    />
  ));


  useLayoutEffect(()=> {
    if(start === '0px') {
      togglePrev(true);
      console.log(isOverflowing(document.getElementById('carousel')));
    }
    if(!isOverflowing(document.getElementById('carousel-container'))) {
      toggleNext(true);
    }
    if(start !== '0px') {
      togglePrev(false)
    }
    if(ref.current.clientWidth < ref.current.scrollWidth) {
      toggleNext(false);
    }
  }, [start, end, props.list.length, ref])


  const isOverflowing = (element) => {
    return element.offsetWidth < element.scrollWidth;
  }

  // useEffect(() => {
  //   setStart('-300px');
  //   toggleOverflow('hidden');
  // }, [overflow]);

  return (
    <div data-testid="outfit" className="main-container">YourOutfit
      {Prev ?
        ('') :
        (<button className="nav Prev" onClick={(e) => { props.interaction(e.target)} }>Prev</button>)
      }
      <div id="carousel-container" ref={ref}>
        {console.log(arr.length)}
        <div id="carousel" style={{ transform: `translateX(${start})` }}>
          <div className="card" onClick={(e) => {props.add(e); props.interaction(e.target)}}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add to Outfit</p>
          </div>
          {arr}
        </div>
        {console.log('here start', start, 'end', end)}
      </div>
      {Next ?
          ('') :
          (<button className="nav Next" onClick={(e) => {
            props.interaction(e.target);
            setStart('-300px');
          }}>Next</button>)
      }
    </div>
  )
}

export default withClickData(YourOutfit, 'Related Items & Comparison');