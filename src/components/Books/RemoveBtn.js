import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();

  const book = props;
  return (
    <div>
      <button type="button" className="remove-button">
        Comments
        (
        {book.comments_counter}
        )
      </button>
      <button
        type="button"
        className="remove-button"
        onClick={() => dispatch(removeBookFromApi(book.id))}
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
