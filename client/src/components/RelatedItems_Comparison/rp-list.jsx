import React, { useState, useEffect } from 'react';
import RPC from './related-product-cards.jsx';
import Modal from './modal.jsx';
import axios from 'axios';
import { totalReviewsAndAvgRating, handlePromises } from '../helperFunctions.jsx';
import withClickData from '../hoc_click_data.jsx';

 function RPList(props) {

  const [rp, setRP] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const[start, setStart] = useState(0);
  const[end, setEnd] = useState(4);
  const [Prev, togglePrev] = useState(true);
  const [Next, toggleNext] = useState(false);

  const arr = rp.map((element, index) => {
    return(
      <RPC action={true} info={element} show={() => {setShowModal(true)}} key={index} redirect={props.changeProduct}/>
    )
  });

  useEffect(() => {
    var promises = [];
    props.relatedProds.forEach((element) => {
      promises.push(axios.get(`/products/${element.toString()}/styles`));
      promises.push(axios.get(`/products/${element.toString()}`));
      promises.push(axios.get(`/reviews/meta/${element.toString()}`));
    });

    Promise.all(promises)
      .then(responseArr => {
        var data = [];
        for (var i = 0; i <= responseArr.length - 3; i+=3) {
          var result = responseArr[i].data.results.find(style => style["default?"]);
          if(result === undefined) {
            result = responseArr[i].data.results[0];
          }
          data.push({
            defaultStyle: result,
            product: responseArr[i+1].data,
            rating: totalReviewsAndAvgRating(responseArr[i+2].data.ratings)[1]
          });
        }
        setRP([...data]);
      })
      .catch(err => console.log(err));

  }, [props.productId]);

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
    }, [start, end, rp.length])


  return (
    <div data-testid="outfit">Related Products
      <div id="carousel-container">
        {Prev ?
          ('') :
          (<button onClick={(e) => { props.interaction(e.target); setStart(start - 1); setEnd(end - 1);}}>Prev</button>)
        }
        {console.log('relatedProds length', props.relatedProds.length)}
        <div id="carousel">
          {arr}
        </div>

        {Next ?
          ('') :
          (<button onClick={(e) => {
            props.interaction(e.target);
            setStart(start + 1);
            setEnd(end + 1);
          }}>Next</button>)
        }
        {showModal ? (<Modal open={showModal} closeModal={() => setShowModal(false)} />) : ('')}
      </div>
    </div>
  )
}

export default withClickData(RPList, 'Related Items & Comparison');