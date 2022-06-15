import { useDispatch } from 'react-redux';
import { removeCommentFromAPI } from '../../redux/comments/comments';

const DeleteBtn = (props) => {
  const dispatch = useDispatch();
  const data = props;
  return (
    <>
      <button
        type="button"
        className="remove-button"
        onClick={() => dispatch(removeCommentFromAPI(data.id, data.book))}
        id={data.id}
      >
        Remove
      </button>
    </>
  );
};

export default DeleteBtn;
