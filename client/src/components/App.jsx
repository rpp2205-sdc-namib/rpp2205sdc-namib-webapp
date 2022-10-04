import React from 'react';
import Overview from './Overview/overview.jsx';
import Ratings_Reviews from './Ratings_Reviews/Ratings_Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Overview />
      <Ratings_Reviews />
    </div>
  }
}

export default App;