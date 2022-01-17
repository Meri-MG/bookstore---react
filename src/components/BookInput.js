import React from 'react';

const BookInput = () => (
  <form>
    <input type="text" placeholder="Add a Book..." value="" name="title" />
    <button type="button" className="input-remove">
      Remove
    </button>
  </form>
);

export default BookInput;
