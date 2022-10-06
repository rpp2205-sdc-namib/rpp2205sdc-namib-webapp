import React from 'react';
import ProductInfo from './product-info.jsx';
import ImageGallary from './image-gallary.jsx';
import StyleSelector from './style-selector.jsx';
import AddToCart from './add-to-cart.jsx';
import axios from 'axios';
import Stars from '../FiveStars.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {styleId: '', test: 3};
  }

  handleStyleIdChange(newId) {
    this.setState({styleId: newId})
  }

  componentDidMount() {
    axios.get(`/products/${this.props.productId}/styles`)
      .then(response => {
        this.setState({styleId: response.data.results[0]})
      })
  }

  render() {
    return (<div>
      <ImageGallary />
      <Stars rating={this.state.test}/>
      <ProductInfo productId={this.props.productId} styleId={this.state.styleId}/>
      <StyleSelector styleId={this.state.styleId} changeStyle={this.handleStyleIdChange.bind(this)}/>
      <AddToCart styleId={this.state.styleId}/>

    </div>)

  }
}

export default Overview;