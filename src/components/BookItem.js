import React from 'react';
import RemoveBtn from './RemoveBtn';

const BookItem = (props) => {
  const title = props;
  return (
    <div>
      <li>{title.data.category}</li>
      <li>{title.data.title}</li>
      <RemoveBtn id={title.data.id} />
    </div>
  );
};

export default BookItem;
