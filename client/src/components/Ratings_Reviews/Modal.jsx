import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, imgSrc }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal_centered">
        <div className="modal">
          <img src={imgSrc}/>
          <button className="modal_closeBtn" onClick={() => setIsOpen(false, null)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;