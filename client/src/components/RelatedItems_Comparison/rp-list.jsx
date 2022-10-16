import React from 'react';
import RPC from './related-product-cards.jsx';
import Modal from './modal.jsx';
import axios from 'axios';
import { totalReviewsAndAvgRating } from '../helperFunctions.jsx';

class RPList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      rp: [],
      star: true
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({showModal: true});
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({showModal: false});
  }

  componentDidMount() {
    var promises = [];
    this.props.relatedProds.forEach((element) => {
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
        this.setState({rp: [...data]}, () => {console.log(this.state)});
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div id="rpList">
        <button>Prev</button>
        {this.state.rp.map((element, index) => {
          return(
            <RPC action={this.state.star} info={element} show={this.handleClick.bind(this)} key={index} redirect={this.props.changeProduct}/>
          )
         })
        }
        <button>Next</button>
        <div id="modal">
          {this.state.showModal ? (<Modal open={this.state.showModal} closeModal={this.handleClose.bind(this)} />) : ('')}
        </div>
      </div>
    )
  }

}

export default RPList;