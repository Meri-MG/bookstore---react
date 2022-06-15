import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';
import CommentBtn from './CommentBtn';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();
  const book = props;
  const removeBook = (id) => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div>
      <CommentBtn comments={book.comments} />
      <button
        type="button"
        className="remove-button"
        onClick={() => removeBook(book.id)}
        id={book.id}
      >
        Remove
      </button>
      <button type="button" className="remove-button">
        Edit
      </button>
    </div>
  );
};

export default RemoveBtn;
