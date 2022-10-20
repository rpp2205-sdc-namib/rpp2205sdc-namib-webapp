import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const regularHeart = require('@fortawesome/free-regular-svg-icons').faHeart;
const solidHeart = require('@fortawesome/free-solid-svg-icons').faHeart;
import withClickData from '../hoc_click_data.jsx';

const AddToOutfit = (props) => {
  const [clicked, toggleClicked] = useState(false);

  return (
    <div className="add-to-outfit" onClick={(e) => {
      toggleClicked(!clicked);
      props.interaction(e);
    }}>
     {clicked ? <FontAwesomeIcon icon={solidHeart} id="solidHeart" /> : <FontAwesomeIcon icon={regularHeart} id="regularHeart"/>}
    </div>
  )
}



export default withClickData(AddToOutfit, 'overview');