import React, { useState, useEffect } from 'react';
import RPC from './related-product-cards.jsx';
import Modal from './modal.jsx';
import axios from 'axios';
import { totalReviewsAndAvgRating, handlePromises } from '../helperFunctions.jsx';

//class RPList extends React.Component
 function RPList(props) {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //     rp: []
  //   }
  // }

  const [rp, setRP] = useState([]);
  const [showModal, setShowModal] = useState(false)

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({showModal: true});
  // }

  // handleClose(e) {
  //   e.preventDefault();
  //   this.setState({showModal: false});
  // }

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
        console.log(responseArr);
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

  // componentDidUpdate(prevProps) {
  //   if(JSON.stringify(prevProps.relatedProds) !== JSON.stringify(this.props.relatedProds)) {
  //     var promises = [];
  //   this.props.relatedProds.forEach((element) => {
  //     promises.push(axios.get(`/products/${element.toString()}/styles`));
  //     promises.push(axios.get(`/products/${element.toString()}`));
  //     promises.push(axios.get(`/reviews/meta/${element.toString()}`))
  //   });

  //   Promise.all(promises)
  //     .then(responseArr => {
  //       var data = [];
  //       console.log(responseArr);
  //       for (var i = 0; i <= responseArr.length - 3; i+=3) {
  //         var result = responseArr[i].data.results.find(style => style["default?"]);
  //         if(result === undefined) {
  //           result = responseArr[i].data.results[0];
  //         }
  //         data.push({
  //           defaultStyle: result,
  //           product: responseArr[i+1].data,
  //           rating: totalReviewsAndAvgRating(responseArr[i+2].data.ratings)[1]
  //         });
  //       }
  //       this.setState({rp: [...data]}, () => {console.log(this.state)});
  //     })
  //     .catch(err => console.log(err));
  //   }
  // }

  // render () {
    return (
      <div id="rpList">
        <div data-testid="outfit">Related Products</div>
        <button>Prev</button>
        {rp.map((element, index) => {
          return(
            <RPC action={true} info={element} show={() => {setShowModal(true)}} key={index} redirect={props.changeProduct}/>
          )
         })
        }
        <button>Next</button>
        <div id="modal">
          {showModal ? (<Modal open={showModal} closeModal={() => setShowModal(false)} />) : ('')}
        </div>
      </div>
    )
  // }

}

export default RPList;