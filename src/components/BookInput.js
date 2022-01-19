import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const idDate = new Date().getTime().toString(36);
    const newBook = {
      id: idDate,
      title: value,
      author: '',
    };
    dispatch(addBook(newBook));
    setValue('');
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Add a Book..."
          value={value}
          name="title"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" className="input-add" onClick={submitBookToStore}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
