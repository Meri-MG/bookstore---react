import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBookFromAPI } from '../redux/books/books';

const BookList = () => {
  const data = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookFromAPI());
  }, []);
  return (
    <ul>
      {data.map((book) => (
        <BookItem key={book.id} data={book} category={book.category} />
      ))}
    </ul>
  );
};

export default BookList;
