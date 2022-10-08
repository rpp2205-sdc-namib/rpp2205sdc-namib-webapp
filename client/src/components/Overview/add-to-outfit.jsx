import React from 'react';

class AddToOutfit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="add-to-outfit">
        <label htmlFor="add-to-outfit"></label>
        <input className="star" type="checkbox"></input>
      </div>
    )

  }
}

export default AddToOutfit;