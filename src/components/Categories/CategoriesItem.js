import React from 'react';
import DeleteBtn from './DeleteBtn';

const CategoryItem = (props) => {
  const category = props;
  return (
    <div className="categoryItemCont">
      <ul className="categoryItem">
        <li className="category">{category.data.name}</li>
        <DeleteBtn id={category.data.id} />
      </ul>
    </div>
  );
};

export default CategoryItem;
