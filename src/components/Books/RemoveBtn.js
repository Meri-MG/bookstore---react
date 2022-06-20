import { useDispatch, useSelector } from 'react-redux';
import { removeBookFromApi, getBookFromAPI } from '../../redux/books/books';

const RemoveBtn = (props) => {
  const data = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const book = props;

  const removeBook = (id) => {
    dispatch(removeBookFromApi(id));
    dispatch(getBookFromAPI());
    book.setState(data);
  };

  return (
    <div>
      <button type="button" className="remove-button" onClick={() => removeBook(book.id)} id={book.id}>
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
