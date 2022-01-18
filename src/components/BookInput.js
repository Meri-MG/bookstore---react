import React from 'react';
// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { addBook, removeBook } from './redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id, // make sure it's unique
    title,
    author,
  };

  // dispatch an action and pass it the newBook object (your action's payload)
  dispatch(addBook(newBook));
};

const BookInput = () => (
  <form>
    <input type="text" placeholder="Add a Book..." value="" name="title" />
    <button type="button" className="input-remove">
      Remove
    </button>
  </form>
);

export default BookInput;
