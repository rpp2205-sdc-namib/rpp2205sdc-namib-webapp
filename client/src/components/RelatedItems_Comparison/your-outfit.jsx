import React from 'react';
import RPC from './related-product-cards.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      star: false
    }
  }

  componentDidMount() {
    var keys = Object.keys(localStorage);
    this.setState({list: [...keys]});
  }

  render () {
    return(
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
        <button onClick={this.props.add}>+ Add Product</button>
        {this.state.list.map((element, index) => {
          return(
            <RPC action={this.state.star} key={index} info={JSON.parse(localStorage.getItem(element))} />
          )
        })}
      </div>
    )
  }
}

export default YourOutfit;