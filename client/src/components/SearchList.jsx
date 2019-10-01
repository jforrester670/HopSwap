import React from 'react';
import SearchItem from './SearchItem.jsx';

const SearchList = (props) => (
  <div>
    <div style={{background: '#eff2bd'}}>
      <button type="button" className="btn btn-primary" onClick={props.handleClear}>Back to Beer List</button>
      <h4> Search Results:</h4>
    </div>
    <div>
      { props.results ?
        props.results.map(result => <SearchItem result={result} handleAdd={props.handleAdd}/>) :
        <h5>No results found</h5>
      }
    </div>
  </div>
)

export default SearchList;