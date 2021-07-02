import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import ShowBookshelves from './ShowBookshelves';
import Search from './Search';
import './App.css';
class BooksApp extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    // get list of books
    const books = await BooksAPI.getAll();
      this.setState({books});
  }

  bookshelfChanger = (_book, shelf) => {
    // change shelf property for the book
    BooksAPI.update(_book, shelf)
    .then((response) => {
      _book.shelf = shelf;
      this.setState((currentState) => ({
        books: currentState.books.filter((book) => (book.id !== _book.id))
        .concat(_book)
      }));
    });
  }

  /**
   * TODO Completed : Instead of using the state variable to keep track of 
   * which page we're on, using React Route inside render method to navigate
   * to the URL in the browser's address bar. This will ensure that users 
   * can use the browser's back and forward buttons to navigate between pages,
   * as well as provide a good URL they can bookmark and share.
   */

  render() {
    // view objects stored in books array
    // console.log(this.state.books);
    const { books } = this.state;

    return(
      <div className="app">
        <Route exact path='/' render = {() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ShowBookshelves
              books={books}
              bookshelfChanger={this.bookshelfChanger}
            />
            <div className="open-search">
              <Link to ='/search'>
                    Search and Add book to Bookshelf
              </Link> 
            </div>
          </div>
        )}
        />
        <Route exact path='/search'>
          <Search
            books={books}
            bookshelfChanger={this.bookshelfChanger}
          />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
