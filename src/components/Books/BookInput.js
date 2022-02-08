import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendBookToAPI } from '../../redux/books/books';
import { getCategoryFromAPI } from '../../redux/categories/categories';

const BookInput = () => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoriesReducer);

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

  useEffect(() => {
    dispatch(getCategoryFromAPI());
  }, []);

  return (
    <div className="addBookCont">
      <hr />
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
          {data.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="button" className="input-add" onClick={submitBookToStore}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
