import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './utils/BooksAPI';
import Book from './Book';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelfChanger: PropTypes.func.isRequired
    };

    state = {
        searchText: '',
        _books: []
    };

    searchBooks = (query) => {
        this.setState({searchText: query});

        if(query) {
            BooksAPI.search(query.trim(), 20).then((books) => {
                if(books.length) {
                    this.setState({_books: books});
                }
                else {
                    this.setState({_books: []});
                }
            });
        }
        else {
            this.setState({_books: []});
        }
    }
    
    render() {
        // console.log(this.state._books);
        const { searchText, _books} = this.state;
        const { books, bookshelfChanger } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to ='/' className="close-search">
                        Close
                    </Link> 
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. 
                        So, don't worry if you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            value = {searchText}
                            onChange={(event) => this.searchBooks(event.target.value)}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                        { _books.length > 0 && (
                            <div>
                                <ol className="books-grid">
                                    {
                                        _books.map((book) => (
                                            <li key={book.id}>
                                                <Book 
                                                    key={book.id}
                                                    book={book}
                                                    books={books}
                                                    bookshelfChanger={bookshelfChanger}
                                                /> 
                                            </li>
                                            
                                        ))
                                    }
                                </ol>
                            </div>
                        )
                        }
                </div>
            </div>
        );
    }
}

export default Search;