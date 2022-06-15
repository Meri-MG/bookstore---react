import React from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';
import CommentsList from './CommentsList';

const Comments = () => {
  const params = useParams();
  return (
    <>
      <CommentInput id={params.id} />
      <CommentsList />
    </>
  );
};

export default Comments;
