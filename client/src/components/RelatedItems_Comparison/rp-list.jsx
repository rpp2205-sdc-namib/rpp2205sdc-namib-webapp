import React from 'react';
import RPC from './related-product-cards.jsx';
import Modal from './modal.jsx';
import axios from 'axios';

class RPList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      rp: []
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
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
    });
    Promise.all(promises)
      .then(responseArr => {
        var data = responseArr.map((element) =>
          element.data
        )
        console.log(data);
        //this.setState({rp: [...responseArr]});

      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div id="rpList">
        {this.state.rp.map((element, index) => {
          return(
            <RPC prod={element} show={this.handleClick.bind(this)} key={index}/>
          )
         })
        }
        <div id="modal">
          {this.state.showModal ? (<Modal open={this.state.showModal} closeModal={this.handleClose.bind(this)} />) : ('')}
        </div>
      </div>
    )
  }

}

export default RPList;