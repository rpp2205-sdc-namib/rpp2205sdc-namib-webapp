import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  return (
    <div className="search_container">
      <input
        className="search_input"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
        onChange={(e) => props.handleChangeSearch(e.target.value)}/>
      <FontAwesomeIcon className="search_icon" icon={ faSearch } />
    </div>
  )
}

export default Search;