import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        bookshelfChanger: PropTypes.func.isRequired
    };

    render() {
        const { book, books, bookshelfChanger } = this.props;

        const bookCoverThumbnail = book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail : '';

        let currentShelf = 'none';
        for(let _book of books) {
            if(_book.id === book.id) {
                currentShelf = _book.shelf;
                break;
            }    
        }

        return(
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${bookCoverThumbnail})`
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={currentShelf} onChange={(event) => 
                            bookshelfChanger(book, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;
