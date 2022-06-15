import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentFromAPI } from '../../redux/comments/comments';
import CommentsItem from './CommentsItem';

const CommentsList = () => {
  const data = useSelector((state) => state.commentsReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentFromAPI(id));
  }, []);
  return (
    <ul>
      {data.map((comment) => (
        <CommentsItem key={comment.id} data={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
