import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx';
import Search from './Search.jsx'

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

    axios.get(`http://localhost:30001/api/${searchTerm}/${value}/search`)
      .then((results) => {
        this.setState({
          searchList: results.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (<div>
      <h1>Hop Swap!</h1>
      <Search handleSearch={this.handleSearch}/>
      <List className="list" beers={this.state.beerList}/>
    </div>)
  }
}

export default App;