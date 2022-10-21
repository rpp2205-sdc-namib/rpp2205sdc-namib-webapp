import React, { useState, useEffect } from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Carousel (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     start: 0,
  //     end: 3,
  //     hidePrev: true
  //   }
  // }

  // handleNext(e) {
  //   this.setState({start: 0, end: 3})
  // }
  const [Prev, togglePrev] = useState(true);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [Next, toggleNext] = useState(false);

  const arr = props.list.map((element, index) => {
    return(
      <RPC action={false} key={index} remove={props.removeProd}
        info={JSON.parse(localStorage.getItem(element))} redirect={props.changeProduct}
      />
    )
  })

  useEffect(() => {
    if(arr.length === 3) {
      toggleNext(true);
      togglePrev(true);
    }
    if(arr.length > 3) {
      toggleNext(false);
    }
  }, [props.list]);

  const handleNav = () => {
    if(start > 0) {
      togglePrev(false);
    }
    if(start === 0) {
      togglePrev(true);
      toggleNext(false);
    }
  }

  //{console.log('start', start, 'end', end)}

    return (
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
          {Prev ?
            ('') :
            (<button onClick={() => { if(start === 0) {togglePrev(true)} toggleNext(false); setStart( start - 1); setEnd( end - 1 )}}>Prev</button>)
          }
        <div className="card" onClick={props.add} id={start}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Add to Outfit</p>
        </div>
        {arr.slice(start, end)}
        {/* {if(end === arr.length) {
          togglePrev(!prev);
        }} */}
        {Next ?
          ('') :
          (<button onClick={() => {
            return setStart( start + 1);
            return setEnd( end + 1 )
            if(start !== 0) {
              console.log('start', start, 'end', end)
              togglePrev(false)
            }
            if(end === arr.length) {
              togglePrev(false);
              toggleNext(true)
            };
          }}>Next</button>)
        }
    </div>
  )
}

export default Carousel;