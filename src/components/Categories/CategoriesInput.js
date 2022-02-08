import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCategoryToAPI } from '../../redux/categories/categories';

const CategoriesInput = () => {
  const data = useSelector((state) => state.categoriesReducer);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  console.log(data, 'data from categories');
  const addCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      name: category,
    };
    dispatch(sendCategoryToAPI(newCategory));
    setCategory('');
  };

  return (
    <div className="categoriesInput">
      <div>
        <p>
          If you don&#39;t see a category of your choice, add one:
        </p>
      </div>
      <form>
        <input
          type="text"
          placeholder="Add a Category..."
          value={category}
          name="title"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="button" className="input-add" onClick={addCategory}>
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoriesInput;
