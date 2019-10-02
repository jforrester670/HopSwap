import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx';
import Search from './Search.jsx';
import SearchList from './SearchList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'smokey',
      beerList: [],
      searchList: [],
      searchTerm: null,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const user = this.state.user;

    axios.get(`http://localhost:3000/api/'${user}'/beerlist`)
      .then((list) => {
        this.setState({
          beerList: list.data.rows
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  handleSearch(search) {
    const searchTerm = search.searchTerm;
    const value = search.value;

    axios.get(`http://localhost:3000/api/${searchTerm}/${value}/search`)
      .then((results) => {
        this.setState({
          searchList: results.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClear() {
    this.setState({
      searchList: []
    });

    const user = this.state.user;

    axios.get(`http://localhost:3000/api/'${user}'/beerlist`)
      .then((list) => {
        this.setState({
          beerList: list.data.rows
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleAdd(beer) {
    const user = this.state.user;

    axios.post(`http://localhost:3000/api/${user}/add`, beer)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });

    alert('Beer added to your list')
  }

  handleRemove(beer) {
    const id = beer.id;
    const user = this.state.user;

    axios.delete(`http://localhost:3000/api/${id}/remove`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });

      axios.get(`http://localhost:3000/api/'${user}'/beerlist`)
      .then((list) => {
        this.setState({
          beerList: list.data.rows
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render () {
    return (
      <div className="container-fluid">
        <h1 style={{display: 'flex', justifyContent: "center"}}>Hop Swap!</h1>
        <Search handleSearch={this.handleSearch} />
        {this.state.searchList.length ?
          <SearchList className="search_list" results={this.state.searchList} handleAdd={this.handleAdd} handleClear={this.handleClear}/> :
          <List className="list" beers={this.state.beerList} handleRemove={this.handleRemove}/>
        }
      </div>
    )
  }
}

export default App;