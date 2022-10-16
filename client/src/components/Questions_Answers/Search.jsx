import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ""
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  handleSearch(value) {
    // begin search after a user types more than 3 characters
    if (value.length < 3) return;

    this.setState({
      searchWord: value
    });
  }

  filterSearch(keyword) {
    if (keyword.length < 3) return;

    return this.props.QAs.filter(question => {
      return question.question_body.includes(this.state.searchWord);
    });
  }

  render() {
    let searched = this.filterSearch(this.state.searchWord);
    return (
      <div className="search_container">
        <input
          className="search_input"
          placeholder="Have a question? Search for answers…"
          onChange={(e) => this.handleSearch(e.target.value)}/>
        <FontAwesomeIcon className="search_icon" icon={ faSearch } />
      </div>
    )
  }
}

export default Search;