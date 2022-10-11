import React from 'react';
import axios from 'axios';
import Stars from '../FiveStars.jsx';

class RPC extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: ''
    }
  }

  componentDidMount() {
    axios.get(`/products/${this.props.current}`)
    .then((response) => {
      //this.setState({product: response.data})
      console.log('response', response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    return(
      <div id="card">
        <button onClick={this.props.show}>Star button</button>
        <p>image goes here</p>
        <p>Category</p>
        <p>Product Name</p>
        <p>Price</p>
        <Stars />
      </div>
    )
  }

}

export default RPC;