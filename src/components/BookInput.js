import React from 'react';

const BookInput = () => {
  return (
    <form>
      <input type="text" placeholder="Add a Book..." value="" name="title" />
      <button className="input-remove">Remove</button>
    </form>
  );
};

export default BookInput;
