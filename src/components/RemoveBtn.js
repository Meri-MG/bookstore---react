import { useDispatch } from 'react-redux';
import { deleteBookFromAPI } from '../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();

  const id = props;
  return (
    <button type="button" onClick={() => dispatch(deleteBookFromAPI(id.id))} id={id.id}>
      Remove Book
    </button>
  );
};

export default RemoveBtn;
