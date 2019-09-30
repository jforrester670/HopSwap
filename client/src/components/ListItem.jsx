import React from 'react';

const ListItem = (props) => (
  <div>
    <h5>{ props.beer.name }</h5>
    <div>
      { props.beer.description }
    </div>
  </div>
)

export default ListItem;