import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const regularHeart = require('@fortawesome/free-regular-svg-icons').faHeart;
const solidHeart = require('@fortawesome/free-solid-svg-icons').faHeart;
import withClickData from '../hoc_click_data.jsx';

const AddToOutfit = (props) => {
  const [clicked, toggleClicked] = useState(false);
  const [id, setId] = useState('');
  // var handleClick = (e)=> {
  //   toggleClicked(!clicked, () => {
  //     console.log(e, e.target.id);
  //     var element = `FontAwesomeIcon#${e.target.id}`;
  //     var time = new Date();
  //     props.interaction(element, time);
  //   }
  // }

  useEffect(() => {
      var element = `FontAwesomeIcon#${id}`;
      props.interaction(element);
  }, [clicked]);

  return (
    <div className="add-to-outfit">
     {clicked ? <FontAwesomeIcon icon={solidHeart} id="solidHeart" onClick={ (e) => {toggleClicked(!clicked); setId(e.target.id)}} /> : <FontAwesomeIcon icon={regularHeart} id="regularHeart" onClick={ (e) => {toggleClicked(!clicked); setId(e.target.id)}} />}
    </div>
  )
}



export default withClickData(AddToOutfit, 'overview');