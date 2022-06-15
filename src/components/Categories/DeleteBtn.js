import { useDispatch } from 'react-redux';
import { removeCategoryFromAPI } from '../../redux/categories/categories';

const DeleteBtn = (props) => {
  const dispatch = useDispatch();
  const data = props;
  return (
    <>
      <button
        type="button"
        className="remove-button"
        onClick={() => dispatch(removeCategoryFromAPI(data.id))}
        id={data.id}
      >
        Remove
      </button>
    </>
  );
};

export default DeleteBtn;
