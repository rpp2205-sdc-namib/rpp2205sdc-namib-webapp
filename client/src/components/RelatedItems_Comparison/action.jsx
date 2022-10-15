import React from 'react';

function Action (props) {

  return(
    props.actionButton ? (
      <div id="action">
          <button onClick={props.showModal}>Star</button>
      </div>
    ) : (
      <div id="action">
        <button name={props.id} onClick={props.removeProd}>Remove</button>
      </div>
    )
  )
}

export default Action;