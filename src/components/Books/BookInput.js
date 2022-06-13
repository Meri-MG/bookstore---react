import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendBookToAPI } from '../../redux/books/books';
import { getCategoryFromAPI } from '../../redux/categories/categories';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [chapter, setChapter] = useState(0);
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoriesReducer);
  console.log(data, 'this is data');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const idDate = new Date().getTime().toString(36);
    const newBook = {
      id: idDate,
      title,
      category,
    };
    dispatch(sendBookToAPI(newBook));
    setTitle('');
    setAuthor('');
    setChapter(0);
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
          placeholder="Book Title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          name="title"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Chapter"
          pattern="[1-9]\d*(\s*[-/]\s*[1-9]\d*)?"
          value={chapter}
          name="title"
          onChange={(e) => setChapter(e.target.value)}
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
