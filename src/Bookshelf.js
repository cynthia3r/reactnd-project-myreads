import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
    
    static propTypes = {
        bookshelfChanger: PropTypes.func.isRequired,
        booksInShelf: PropTypes.array
    };

    render() {
        // console.log(this.props.booksInShelf);
        const { books, bookshelfChanger } = this.props;
        
        return (
            <ol className="books-grid">{
                (books.length > 0) &&
                (books !== undefined) &&
                books.map((book, idx) => (
                    <li key={book.id}>
                        <Book
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