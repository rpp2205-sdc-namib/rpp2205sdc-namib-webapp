import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search_container">
        <input
          className="search_input"
          placeholder="Have a question? Search for answers…"
          onChange={(e) => this.props.handleChangeSearch(e.target.value)}/>
        <FontAwesomeIcon className="search_icon" icon={ faSearch } />
      </div>
    )
  }
}

export default Search;