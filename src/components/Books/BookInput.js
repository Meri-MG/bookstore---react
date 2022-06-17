import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendBookToAPI } from '../../redux/books/books';
import { getCategoryFromAPI } from '../../redux/categories/categories';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [chapter, setChapter] = useState(0);
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoriesReducer);

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      category,
      chapter,
    };
    dispatch(sendBookToAPI(book));
    setTitle('');
    setAuthor('');
    setChapter(0);
    setCategory('');
    navigate('/');
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
          min={3}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          name="author"
          min={3}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Chapter"
          pattern="[1-9]\d*(\s*[-/]\s*[1-9]\d*)?"
          value={chapter}
          name="chapter"
          onChange={(e) => setChapter(e.target.value)}
          required
        />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a Category</option>
          {categories.map((category) => (
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
