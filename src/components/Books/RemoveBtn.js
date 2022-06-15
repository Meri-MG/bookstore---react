import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();
  const book = props;
  const removeBook = (id) => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div>
      <button
        type="button"
        className="remove-button"
        onClick={() => removeBook(book.id)}
        id={book.id}
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
