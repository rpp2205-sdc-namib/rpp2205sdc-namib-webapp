import React from 'react';
import SizeSelector from './size-selector.jsx';
import QuantitySelector from './quantity-selector.jsx';
import AddToOutfit from './add-to-outfit.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state={quantity: 0, sizeAndQuantityObj: undefined}
  }

  componentDidMount() {
    var sizeAndQuantityArr = Object.values(this.props.styleObj.skus);
    var sizeAndQuantityObj = sizeAndQuantityArr.reduce((acc, element) => {
      acc[element.size] = element.quantity;
      return acc;
    }, {});
    this.setState({ sizeAndQuantityObj });
  }

  handleSizeSelect(e) {
    var size = e.target.value;
    if (size !== '-') {
      this.setState({quantity: this.state.sizeAndQuantityObj[size]})
    } else {
      this.setState({quantity: 0});
    }
  }

  handleButtonClick() {

  }

  render() {
    if (!this.state.sizeAndQuantityObj) {
      return null;
    }
    return (<div className="add-to-cart">
      <div className="add-to-card-line1">
        <SizeSelector sizeAndQuantityObj={this.state.sizeAndQuantityObj} handleSizeSelect={this.handleSizeSelect.bind(this)}/>
        <QuantitySelector quantity={this.state.quantity}/>
      </div>
      <div className="add-to-card-line2">
        <button id="add-to-cart-btn" onClick={this.handleButtonClick.bind(this)}>Add To Cart</button>
        <AddToOutfit />
      </div>

    </div>)

  }
}

export default AddToCart;