import React, { Component } from 'react'
import SearchInput from './SearchInput'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">BookFinder</h1>
        <p>This is a simple book-find web app using google book api.Hope you enjoy it!</p>
        <SearchInput value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Jumbotron;
