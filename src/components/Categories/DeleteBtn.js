import { useDispatch } from 'react-redux';
import { deleteCategoryFromAPI } from '../../redux/categories/categories';

const DeleteBtn = (props) => {
  const dispatch = useDispatch();
  const id = props;
  return (
    <>
      <button
        type="button"
        className="remove-button"
        onClick={() => dispatch(deleteCategoryFromAPI(id.id))}
        id={id.id}
      >
        Remove
      </button>
    </>
  );
};

export default DeleteBtn;
