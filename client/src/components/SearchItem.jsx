import React from 'react';

const SearchItem = (props) => (
  <div>
    <h5>{ props.result.name }</h5>
    <div>
      { props.result.description }
    </div>
    <h5>ABV: {props.result.abv}</h5>
    <h5>IBU: {props.result.ibu}</h5>
    <h5>Food Pairings: </h5>
    {props.result.food_pairing.map(food => <div>{food}</div> ) }
    <button type="submit" onClick ={ () => props.handleAdd(props.result) }>Add to Beer List</button>
  </div>
)

export default SearchItem;