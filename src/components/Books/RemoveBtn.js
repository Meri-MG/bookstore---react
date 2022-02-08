import { useDispatch } from 'react-redux';
import { deleteBookFromAPI } from '../../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();

  const id = props;
  return (
    <div>
      <button type="button" className="remove-button">
        Comments
      </button>
      <button
        type="button"
        className="remove-button"
        onClick={() => dispatch(deleteBookFromAPI(id.id))}
        id={id.id}
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
