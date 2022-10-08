import React from 'react';
import RPC from './related-product-cards.jsx';

class RPList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rp: [0, 1, 2]
    }
  }

  render () {
    return (
      <div id="rpList">
        {this.state.rp.map((element) => {
          return(
            <RPC current={this.props.productId} showModal={this.props.show} key={element}/>
          )
        })}
      </div>
    )
  }

}

export default RPList;