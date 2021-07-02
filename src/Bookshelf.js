import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        bookshelfChanger: PropTypes.func.isRequired,
        booksInShelf: PropTypes.array.isRequired
    };

    render() {
        // console.log(this.props.books);
        const { bookshelfTitle, bookshelfChanger, booksInShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">{
                        (booksInShelf.length > 0) &&
                        (booksInShelf !== undefined) &&
                        booksInShelf.map((book) => (
                            <li key={book.id}>
                                <Book key={book.id} books={booksInShelf} book={book} bookshelfChanger={bookshelfChanger}/>
                            </li>
                    ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;