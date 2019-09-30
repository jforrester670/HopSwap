import React from 'react';
import App from './App.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchTerm: 'name',
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
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <p>
             <label>Select by: </label>
             <select id = "searchTerms" onChange={this.change}>
               <option value = "name">Name</option>
               <option value = "food_pairing">Food Pairing</option>
               <option value = "abv">ABV</option>
               <option value = "ibu">IBU</option>
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
