import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();

  const bookToRemove = (e) => {
    const bookId = {
      id: e.target.id,
    };
    dispatch(removeBook(bookId));
  };
  const id = props;
  return (
    <button type="button" onClick={bookToRemove} id={id.id}>
      Remove Book
    </button>
  );
};

export default RemoveBtn;
