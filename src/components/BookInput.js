import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendBookToAPI } from '../redux/books/books';

const BookInput = () => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const idDate = new Date().getTime().toString(36);
    const newBook = {
      id: idDate,
      title: value,
      category,
    };
    dispatch(sendBookToAPI(newBook));
    setValue('');
    setCategory('');
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
          required
        />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Education">Education</option>
          <option value="Classics">Classics</option>
          <option value="Other">Other</option>
        </select>
        <button type="button" className="input-add" onClick={submitBookToStore}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
