import React from 'react';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';

class Ratings_Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Reviews_List />
        <Rating_Breakdown />
        {/* <Product_Breakdown />
        <Sort_Options />
        <Invidiual_Review_Tile />
        <Write_New_Review /> */}
      </div>
    )
  }
}

export default Ratings_Reviews;