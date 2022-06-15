import React from 'react';
import DeleteBtn from './DeleteBtn';

const CommentsItem = (props) => {
  const comment = props;
  return (
    <>
      <div className="CommentsItemCont" key={comment.data.id}>{comment.data.text}</div>
      <DeleteBtn id={comment.data.id} book={comment.data.book_id} />
    </>
  );
  // );
};

export default CommentsItem;
