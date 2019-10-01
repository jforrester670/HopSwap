import React from 'react';
import App from './App.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchTerm: 'beer_name',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state);
    this.setState({value: ''});
  }

  change(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div className="align-items-center" style={{display: 'flex', justifyContent: 'center'}}>
        <form onSubmit={this.handleSubmit}>
          <p>
             <label style={{color: '#eff2bd'}}>Search by: </label>
             <select id = "searchTerms" onChange={this.change}>
               <option value="beer_name">Name</option>
               <option value="food">Food Pairing</option>
               <option value="abv_gt">ABV Greater than</option>
               <option value="ibu_lt">IBU Less than</option>
             </select>
          </p>
          <input type='text' placeholder='Search... ' value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
