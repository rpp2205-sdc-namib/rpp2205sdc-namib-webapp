import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';


function Action (props) {

  return(
    props.actionButton ? (
      <div id="action">
        <FontAwesomeIcon icon={faStar} onClick={props.showModal}/>
      </div>
    ) : (
      <div id="action">
        <FontAwesomeIcon icon={faXmarkCircle} id={props.id} onClick={props.removeProd}/>
      </div>
    )
  )
}

export default Action;