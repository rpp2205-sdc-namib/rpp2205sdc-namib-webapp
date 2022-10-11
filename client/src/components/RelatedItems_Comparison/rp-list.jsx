import React from 'react';
import RPC from './related-product-cards.jsx';
import Modal from './modal.jsx';

class RPList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      rp: [0, 1, 2]
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

  render () {
    return (
      <div id="rpList">
        {this.state.rp.map((element) => {
          return(
            <RPC current={this.props.productId} show={this.handleClick.bind(this)} key={element}/>
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