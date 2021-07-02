import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';


class ShowBookshelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelfChanger: PropTypes.func.isRequired
    };

    // const bookshelfTypes = [
    //     {"bookshelfTitle": 'Currently Reading', "bookshelfType": 'currentlyReading'},
    //     {"bookshelfTitle": 'Want to read', "bookshelfType": 'wantToRead'},
    //     {"bookshelfTitle": 'Read', "bookshelfType": 'read'}
    // ];

    render() {
        // console.log(this.props.books);
        const { books, bookshelfChanger } = this.props;
        return(
            <div className="list-books-content">
                <div>
                    <Bookshelf
                        bookshelfTitle = "Currently Reading"
                        bookshelfChanger = {bookshelfChanger}
                        booksInShelf = {books.filter(
                            (book) => book.shelf === "currentlyReading"
                        )}
                    />
                    <Bookshelf
                        bookshelfTitle = "Want to read"
                        bookshelfChanger = {bookshelfChanger}
                        booksInShelf = {books.filter(
                            (book) => book.shelf === "wantToRead"
                        )}
                    />
                    <Bookshelf
                        bookshelfTitle = "Read"
                        bookshelfChanger = {bookshelfChanger}
                        booksInShelf = {books.filter(
                            (book) => book.shelf === "read"
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default ShowBookshelves;
