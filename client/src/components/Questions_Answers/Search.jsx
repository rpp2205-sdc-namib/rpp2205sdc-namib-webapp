import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ""
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    // begin search after a user types more than 3 characters
  }

  render() {
    return (
      <div>
        <input placeholder="Have a question? Search for answers…" onChange={this.handleSearch}/>
        <button>submit</button>
      </div>
    )
  }
}

export default Search;