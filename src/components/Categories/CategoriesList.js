import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryFromAPI } from '../../redux/categories/categories';
import CategoryItem from './CategoriesItem';

const CategoriesList = () => {
  const data = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState(data);

  useEffect(() => {
    dispatch(getCategoryFromAPI());
  }, [state]);

  return (
    <ul>
      {data.map((category) => (
        <CategoryItem key={category.title} data={category} setState={setState} />
      ))}
    </ul>
  );
};

export default CategoriesList;
