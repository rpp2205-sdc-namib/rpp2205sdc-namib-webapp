import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const regularHeart = require('@fortawesome/free-regular-svg-icons').faHeart;
const solidHeart = require('@fortawesome/free-solid-svg-icons').faHeart;

const AddToOutfit = (props) => {
  const [clicked, toggleClicked] = useState(false);
  console.log(clicked);
  return (
    <div className="add-to-outfit" onClick={() => {
      toggleClicked(!clicked)
    }}>
     {clicked ? <FontAwesomeIcon icon={solidHeart} id="solidHeart"/> : <FontAwesomeIcon icon={regularHeart} id="regularHeart"/>}
    </div>
  )
}

export default AddToOutfit;