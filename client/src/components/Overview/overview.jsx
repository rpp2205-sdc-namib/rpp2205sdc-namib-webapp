import React from 'react';
import ProductInfo from './product-info.jsx';
import ImageGallary from './image-gallary.jsx';
import StyleSelector from './style-selector.jsx';
import AddToCart from './add-to-cart.jsx';
import { avgRating } from './helperFunctions.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: 0, currentProduct: {}, currentStyles: []};
  }

  componentDidMount() {
    var id = this.props.productId;
    var promises = [axios.get(`/products/${id}`),
                    axios.get(`/products/${id}/styles`),
                    axios.get(`/reviews/meta/${id}`)];
    Promise.all(promises)
      .then(resultArr => {
      this.setState({currentProduct: resultArr[0].data,
                     currentStyles: resultArr[1].data.results,
                     rating: avgRating(resultArr[2].data.ratings)})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (<div>
      <ImageGallary />
      <ProductInfo rating={this.state.rating}/>
      <StyleSelector />
      <AddToCart />

    </div>)

  }
}

export default Overview;