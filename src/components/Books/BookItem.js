import React from 'react';
import RemoveBtn from './RemoveBtn';

const BookItem = (props) => {
  const book = props;
  return (
    <div className="bookItemCont">
      <div className="bookItem">
        <li className="category">{book.data.category}</li>
        <li className="book">{book.data.title}</li>
        <li className="author">{book.data.author}</li>
        <RemoveBtn id={book.data.id} />
      </div>
      <div className="wrapper-round">
        <div className="round" />
        <div className="per">
          <h3 className="percent top">64%</h3>
          <p className="percent">Completed</p>
        </div>
      </div>
      <div className="current">
        <p className="cur-head">CURRENT CHAPTER</p>
        <p className="cur-head sec">
          Chapter-
          {book.data.chapter}
        </p>
        <input className="progress" type="button" value="UPDATE PROGRESS" />
      </div>
    </div>
  );
};

export default BookItem;
