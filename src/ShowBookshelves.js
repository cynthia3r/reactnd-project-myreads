import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

// Functional Component
const ShowBookshelves = props => {

    const { books, bookshelfChanger } = props;
    
    const bookshelfTypes = [
        {
            "bookshelfTitle": 'Currently Reading',
            "bookshelfType": 'currentlyReading'
        },
        {
            "bookshelfTitle": 'Want to read',
            "bookshelfType": 'wantToRead'
        },
        {
            "bookshelfTitle": 'Read',
            "bookshelfType": 'read'
        }
    ];

    return(
        <div className="list-books-content">
            {
                bookshelfTypes.map((bookShelf) => {
                    const booksInShelf = books.filter(
                        (book) => book.shelf === bookShelf.bookshelfType);
                        return (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">
                                    {bookShelf.bookshelfTitle}
                                </h2>
                                <div className="bookshelf-books">
                                    <Bookshelf
                                        books= {booksInShelf}
                                        bookshelfChanger = {bookshelfChanger}
                                    />
                                </div>
                            </div>          
                        );
                })  
            }
        </div>
    );
}

ShowBookshelves.propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfChanger: PropTypes.func.isRequired
};


export default ShowBookshelves;
