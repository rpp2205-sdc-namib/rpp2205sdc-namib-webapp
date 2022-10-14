import React from 'react';
import { QuantitySelectArr } from '../helperFunctions.jsx';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity: </label>
        <select name="quantity" id="quantity">
       {this.props.quantity === 0 ? (<option key="defaultQuantityOption">Select Quantity</option>) : null}
          {QuantitySelectArr(this.props.quantity).map((element, index) => {
            return (<option key={index} value={element}>{element}</option>)
          }) }
        </select>
      </div>
    )

  }
}

export default QuantitySelector;