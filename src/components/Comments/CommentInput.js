import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCommentToAPI } from '../../redux/comments/comments';

const CommentsInput = (props) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const data = props;
  const addComment = (e) => {
    e.preventDefault();
    const newComment = {
      text: comment,
      book: data.id,
    };
    dispatch(sendCommentToAPI(newComment));
    setComment('');
  };

  return (
    <div className="CommentsInput">
      <div>
        <p>Add your review to the Book:</p>
      </div>
      <form>
        <input
          type="text"
          placeholder="Add a Comment..."
          value={comment}
          name="title"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="button" className="input-add" onClick={addComment}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsInput;
