import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBookToAPI } from '../../redux/books/books';
import { getCategoryFromAPI } from '../../redux/categories/categories';

const EditBook = (props) => {
  const data = props;
  const [title, setTitle] = useState(data.book.title);
  const [author, setAuthor] = useState(data.book.author);
  const [chapter, setChapter] = useState(data.book.chapter);
  const [category, setCategory] = useState(data.book.category);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoriesReducer);

  const updateBookToStore = (e) => {
    e.preventDefault();
    const book = {
      id: data.book.id,
      title,
      author,
      category,
      chapter,
    };
    dispatch(updateBookToAPI(book));
    navigate('/');
    data.setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getCategoryFromAPI());
  }, []);

  return (
    <>
      <div
        className="dark_bg"
        onClick={() => data.setIsOpen(false)}
        onKeyDown={() => data.setIsOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="dark background"
      />
      <div className="centered">
        <div className="modal">
          <form className="modal_actions">
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
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="input-add save"
              onClick={updateBookToStore}
            >
              Save Changes
            </button>
            <button
              type="button"
              className="input-add cancel"
              onClick={() => data.setIsOpen(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBook;
