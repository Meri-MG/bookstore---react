import { useDispatch, useSelector } from 'react-redux';
import { removeCommentFromAPI, getCommentFromAPI } from '../../redux/comments/comments';

const DeleteBtn = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer);
  const data = props;

  const removeComment = (id, book) => {
    dispatch(removeCommentFromAPI(id, book));
    dispatch(getCommentFromAPI());
    data.setState(comments);
  };

  return (
    <>
      <button
        type="button"
        className="remove-button category"
        onClick={() => removeComment(data.id, data.book)}
        id={data.id}
      >
        Remove
      </button>
    </>
  );
};

export default DeleteBtn;
