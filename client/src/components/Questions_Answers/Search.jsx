//import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  return (
    <div className="search_container">
      <input
        className="search_input"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
        onChange={(e) => props.handleChangeSearch(e.target.value)}/>
      <i className="fa-solid fa-magnifying-glass search_icon"></i>
    </div>
  )
}

export default Search;

//<FontAwesomeIcon className="search_icon" icon={ faSearch } />