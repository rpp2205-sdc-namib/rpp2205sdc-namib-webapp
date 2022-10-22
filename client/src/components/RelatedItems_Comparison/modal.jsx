import React from 'react';
import withClickData from '../hoc_click_data.jsx';

function Modal (props) {

  if(!props.open) {
    return null
  }
  return(
    <div id="modal">
      <button onClick={(e) => {props.closeModal(); props.interaction(e.target)}}>Close</button>
      <p>Comparison text for modal goes here...</p>
    </div>
  )
}

export default withClickData(Modal, 'Related Items & Comparison');