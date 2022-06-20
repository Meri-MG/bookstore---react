import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCommentToAPI } from '../../redux/comments/comments';

const CommentsInput = (props) => {
  const [comment, setComment] = useState('');
  const [validation, setValidation] = useState();
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
    let errors = validation;
    if (comment.trim() === '') {
      errors = 'This field cannot be empty';
    } else if (comment.trim().length < 3) {
      errors = 'This field cannot be less than 3 characters';
    } else {
      errors = '';
    }
    setValidation(errors);
  };

  return (
    <div className="input_container">
      <div>
        <p>Add your review to the Book:</p>
      </div>
      {validation && <p className="error_msg">{validation}</p>}
      <form>
        <input
          type="text"
          placeholder="Add a Comment..."
          value={comment}
          name="text"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="button" className="add_btn" onClick={addComment}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsInput;
