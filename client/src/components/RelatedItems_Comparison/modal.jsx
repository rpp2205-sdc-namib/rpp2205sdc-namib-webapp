import React from 'react';

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
        <button onClick={this.props.closeModal}>Close</button>
        <p>Comparison text for modal goes here...</p>
      </div>
    )
  }
}

export default Modal;