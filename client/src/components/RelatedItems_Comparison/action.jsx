import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import withClickData from '../hoc_click_data.jsx';



function Action (props) {

  return(
    props.actionButton ? (
      <div id="action">
        <FontAwesomeIcon id="star" icon={faStar} onClick={ (e) => {props.showModal(props.info); props.interaction(e.currentTarget)}}/>
      </div>
    ) : (
      <div id="action">
        <FontAwesomeIcon id="remove" icon={faXmarkCircle} id={props.id} onClick={(e) => {props.removeProd(e); props.interaction(e.currentTarget)}}/>
      </div>
    )
  )
}

export default withClickData(Action, 'Related Items & Comparison');