import React, { Component } from 'react'
import { Grid, Row, Col, Accordion, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

class Books extends Component {
  render() {
    const bookItems = this.props.books.map((book, index) => {
      let id = book.id;
      let title = book.volumeInfo.title;
      let thumbnail = book.volumeInfo.imageLinks.thumbnail;
      let categories = book.volumeInfo.categories;
      let authors = book.volumeInfo.authors;
      let publisher = book.volumeInfo.publisher;
      let pageCount = book.volumeInfo.pageCount;
      let publishedDate = book.volumeInfo.publishedDate;
      let averageRating = book.volumeInfo.averageRating;
      let description = book.volumeInfo.description;
      let buyLink = book.saleInfo.buyLink;
      return (
          <Panel key={id} header={title} eventKey={id} bsStyle={index % 2 === 0 ? 'primary' : 'default'}>
            <Grid>
              <Row>
                <Col xs={3} lg={3}>
                  <img className="thumbnail" src={thumbnail} alt="presentation" />
                </Col>

                <Col xs={8} lg={8}>
                  <ListGroup>
                    <ListGroupItem>
                      <strong>Categories: </strong> { categories }
                    </ListGroupItem>

                    <ListGroupItem>
                      <strong>Authors: </strong> { authors }
                    </ListGroupItem>

                    <ListGroupItem>
                      <strong>Publisher: </strong> { publisher }
                    </ListGroupItem>

                    <ListGroupItem>
                      <strong>Publish Date: </strong> { publishedDate }
                    </ListGroupItem>

                    <ListGroupItem>
                      <strong>Page Count: </strong> { pageCount }
                    </ListGroupItem>

                    <ListGroupItem>
                      <strong>Average Rating: </strong> <span className="rating" >{ averageRating }</span>
                    </ListGroupItem>


                  </ListGroup>
                </Col>

              </Row>

              <Row>
                <Col xs={11} md={11} lg={11} >
                  <h3>Book Description</h3>
                  <p className="description">{ description }</p>
                  <hr />
                  <a href={buyLink}
                  className = { buyLink === undefined ? 'btn btn-warning' : 'btn btn-primary' }
                  disabled = { buyLink === undefined ? true : false }
                  >
                  { buyLink === undefined ? "Not For Sale" : "Buy Now" }
                  </a>

                  <a className="btn btn-primary">Add to Collection</a>
                </Col>
              </Row>

            </Grid>
          </Panel>
        )
      }
    );
    return (
      <div className="bookslist">
          <h2>The Result Of Booklist:</h2>
          <Accordion>
            {bookItems}
          </Accordion>
      </div>
    );
  }
}

export default Books;
