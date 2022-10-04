import React from 'react';
import Overview from './Overview/overview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentProductId: ''};
    this.handleProductIdChange.bind(this);
  }

  handleProductIdChange(newId) {
    //can be used by all components for product ID change
    this.setState({currentProductId: newId})
  }

  render() {
    return <div>
      <Overview productId={this.state.currentProductId} handleProductIdChange={this.handleProductIdChange}/>
    </div>
  }
}

export default App;