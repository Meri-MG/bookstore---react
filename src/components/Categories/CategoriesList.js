import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryFromAPI } from '../../redux/categories/categories';
import CategoryItem from './CategoriesItem';

const CategoriesList = () => {
  const data = useSelector((state) => state.categoriesReducer);
  console.log(data, 'categories');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryFromAPI());
  }, []);
  return (
    <ul>
      {data.map((category) => (
        <CategoryItem key={category.id} data={category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
