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
        // console.log(this.props.booksInShelf);
        const { books, bookshelfChanger } = this.props;
        
        return (
            <ol className="books-grid">{
                (books.length > 0) &&
                (books !== undefined) &&
                books.map((book) => (
                    <li key={book.id}>
                        <Book
                            key={book.id}
                            book={book}
                            books={books}
                            bookshelfChanger={bookshelfChanger}
                        />
                    </li>
                ))}
            </ol>
        );
    }
}

export default Bookshelf;