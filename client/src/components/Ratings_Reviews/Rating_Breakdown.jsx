import React from 'react';
const axios = require('axios');

class Rating_Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };

    this.retrieve = this.retrieve.bind(this);
  }

  retrieve() {
    axios.get('/reviews/71698/1/1/newest')
      .then(results => {
        console.log('results', results);
        this.setState({ product: results }, () => { console.log(this.state.product); })
      })
      .catch(error => { console.error(error); });
  }

  componentDidMount() {
    this.retrieve();
  }

  render() {
    return (
      <div>
        <div>This is data coming from one product review in stringified form.</div>
        <div>{JSON.stringify(this.state.product)}</div>
      </div>
    )
  }
}

export default Rating_Breakdown;