import React from 'react';
import DeleteBtn from './DeleteBtn';

const CategoryItem = (props) => {
  const category = props;
  return (
    <>
      <div className="categoryItemCont">{category.data.name}</div>
      <DeleteBtn id={category.data.id} />
    </>
  );
  // );
};

export default CategoryItem;
