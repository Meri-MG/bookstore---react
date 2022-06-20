import React from 'react';
import DeleteBtn from './DeleteBtn';

const CategoryItem = (props) => {
  const category = props;
  return (
    <>
      <div className="item_container">
        <p>{category.data.name}</p>
        <DeleteBtn id={category.data.id} setState={category.setState} />
      </div>
    </>
  );
};

export default CategoryItem;
