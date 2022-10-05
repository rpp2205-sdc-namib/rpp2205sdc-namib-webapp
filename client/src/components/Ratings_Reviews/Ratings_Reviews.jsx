import React from 'react';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Rating_Breakdown />
        {/* <Product_Breakdown />
        <Sort_Options />
        <Reviews_List />
        <Invidiual_Review_Tile />
        <Write_New_Review /> */}
      </div>
    )
  }
}

export default Ratings_Reviews;