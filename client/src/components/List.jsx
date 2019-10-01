import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <div style={{background: '#eff2bd'}}>
      <h4 > Beer List:</h4>
      <div>Dreaming of {props.beers.length} beers.</div>
    </div>
    { props.beers ?
      props.beers.map(beer => <ListItem beer={beer} handleRemove={props.handleRemove}/>) :
      <h5>No Beers in list</h5>
    }
  </div>
)

export default List;