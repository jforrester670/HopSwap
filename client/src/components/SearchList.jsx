import React from 'react';
import SearchItem from './SearchItem.jsx';

const SearchList = (props) => (
  <div>
    <button type="submit" onClick={props.handleClear}>Back to Beer List</button>
    <h4> Search Results:</h4>
    { props.results ?
      props.results.map(result => <SearchItem result={result} handleAdd={props.handleAdd}/>) :
      <h5>No results found</h5>
    }
  </div>
)

export default SearchList;