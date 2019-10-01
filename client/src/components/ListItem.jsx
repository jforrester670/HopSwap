import React from 'react';

const ListItem = (props) => (
  <div className="card mb-3" style={{width: '800px', background: '#eff2bd'}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={props.beer.image_url} className="card-img" style={  {width: '150px'}}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{ props.beer.name }</h5>
          <p className="card-text">{ props.beer.description }</p>
          <p className="card-text"><small className="text-muted">ABV:   {props.beer.abv}</small></p>
          <p className="card-text"><small className="text-muted">IBU:   {props.beer.ibu}</small></p>
          <button type="button" className="btn btn-primary" onClick={ ()  => props.handleRemove(props.beer)}>Remove Beer</button>
        </div>
      </div>
    </div>
  </div>
)

export default ListItem;