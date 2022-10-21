import React from 'react';
import withClickData from '../hoc_click_data.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(!this.props.open) {
      return null
    }
    return(
      <div id="modal">
        <button onClick={(e) => {this.props.closeModal; console.log(e.target.nodeName); this.props.interaction(e.target)}}>Close</button>
        <p>Comparison text for modal goes here...</p>
      </div>
    )
  }
}

export default withClickData(Modal, 'Related Items & Comparison');