import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:props.value
    };
  }

  onChange(event) {
    this.setState({ value:event.target.value });
    this.props.onChange(this.state.value);
  }

  render() {
    return (
        <FormControl
          bsSize = "large"
          type = "text"
          value = {this.state.value}
          placeholder="Search Books..."
          onChange = {this.onChange.bind(this)}
        />
    );
  }
}

export default SearchInput;
