import React, { Component } from 'react';
import Header from './components/Header';
import Books from './components/Books';
import Jumbotron from './components/Jumbotron';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      books:[],
      text:"Harry Potter"
    }
  }

  componentWillMount() {
      this.getBooks();
  }

  getBooks() {
    axios.request({
      method:"get",
      url:"https://www.googleapis.com/books/v1/volumes?q=" + this.state.text,
    }).then((response) => {
      this.setState({ books:response.data.items })
    }).catch((error) => {
      console.log(error)
    })
  }

  onChange(value) {
    this.setState({ text:value });
    this.getBooks();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col className="box" sm={12} md={12} lg={12}>
              <Jumbotron value={this.state.text} onChange={this.onChange.bind(this)}  />
              <Books value={this.state.text} books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
