import React from 'react';
import Overview from './Overview/overview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentProductID: ''};
  }

  render() {
    return <div>
      <Overview />
    </div>
  }
}

export default App;