import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(ev) {
    this.setState({ searchTerm: ev.target.value });
    this.props.onSearchChange(ev.target.value);
  }
  render() {
    return <input onChange={this.onInputChange} value={this.state.searchTerm} placeholder="Search" />;
  }
}


export default SearchBar;
