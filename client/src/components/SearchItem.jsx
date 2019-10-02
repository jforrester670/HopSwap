import React from 'react';

const SearchItem = (props) => (
  <div className="card mb-3" style={{width: '800px', background: '#eff2bd'}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={props.result.image_url} className="card-img" style={{width: '150px'}}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{ props.result.name }</h5>
          <p className="card-text">{ props.result.description }</p>
          <p className="card-text"><small className="text-muted">ABV: {props.result.abv}</small></p>
          <p className="card-text"><small className="text-muted">IBU: {props.result.ibu}</small></p>
          <p className="card-text"><small className="text-muted">Food   Pairings: {props.result.food_pairing.map(food => <div>{food}</div> ) }</small></p>
          <button type="button" className="btn btn-primary" onClick ={ () => props.handleAdd(props.result) }>Add to Beer List</button>
        </div>
      </div>
    </div>
  </div>
)

export default SearchItem;