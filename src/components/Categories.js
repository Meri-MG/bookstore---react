import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCategoryToAPI } from '../redux/categories/categories';

const Categories = () => {
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
    <div>
      <p>If you don&#39;t see in the list a category of your choice, add one</p>
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
    </div>
  );
};

export default Categories;
