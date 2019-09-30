import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Beer List:</h4>
    Dreaming of {props.beers.length} beers.
    { props.beers ?
      props.beers.map(beer => <ListItem beer={beer}/>) :
      <h5>No Beers in list</h5>
    }
  </div>
)

export default List;