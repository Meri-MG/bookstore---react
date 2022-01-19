import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const data = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {data.map((book) => (
        <BookItem key={book.id} data={book} />
      ))}
    </ul>
  );
};

export default BookList;
