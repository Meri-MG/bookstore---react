import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCategoryToAPI } from '../../redux/categories/categories';

const CategoriesInput = () => {
  const [category, setCategory] = useState('');
  const [validation, setValidation] = useState();
  const dispatch = useDispatch();
  const addCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      name: category,
    };
    dispatch(sendCategoryToAPI(newCategory));
    setCategory('');
    let errors = validation;
    if (category.trim() === '') {
      errors = 'This field cannot be empty';
    } else if (category.trim().length < 3) {
      errors = 'This field cannot be less than 3 characters';
    } else {
      errors = '';
    }
    setValidation(errors);
  };

  return (
    <div className="input_container">
      <div>
        <p>
          If you don&#39;t see a category of your choice, add one:
        </p>
      </div>
      {validation && <p className="error_msg">{validation}</p>}
      <form>
        <input
          type="text"
          placeholder="Add a Category..."
          value={category}
          name="title"
          min={3}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="button" className="add_btn" onClick={addCategory}>
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoriesInput;
