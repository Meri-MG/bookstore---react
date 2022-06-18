import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBookFromAPI } from '../../redux/books/books';
import { getCategoryFromAPI } from '../../redux/categories/categories';

const BookList = () => {
  const data = useSelector((state) => state.booksReducer);
  const dataCategory = useSelector((state) => state.categoriesReducer);

  const [state, setState] = useState(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookFromAPI());
  }, [state]);

  useEffect(() => {
    dispatch(getCategoryFromAPI());
  }, []);

  return (
    <ul>
      {data.map((book) => (
        <BookItem setState={setState} key={book.title} data={book} category={dataCategory} />
      ))}
    </ul>
  );
};

export default BookList;
