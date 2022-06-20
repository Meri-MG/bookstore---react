import React from 'react';
import DeleteBtn from './DeleteBtn';

const CommentsItem = (props) => {
  const comment = props;
  return (
    <>
      <div className="item_container" key={comment.data.id}>
        <p>{comment.data.text}</p>
        <DeleteBtn id={comment.data.id} book={comment.data.book_id} setState={comment.setState} />
      </div>
    </>
  );
};

export default CommentsItem;
