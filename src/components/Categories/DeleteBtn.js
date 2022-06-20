import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFromAPI, removeCategoryFromAPI } from '../../redux/categories/categories';

const DeleteBtn = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  const data = props;

  const removeCategory = (id) => {
    dispatch(removeCategoryFromAPI(id));
    dispatch(getCategoryFromAPI());
    data.setState(categories);
  };

  return (
    <>
      <button
        type="button"
        className="remove-button category"
        onClick={() => removeCategory(data.id)}
        id={data.id}
      >
        Remove
      </button>
    </>
  );
};

export default DeleteBtn;
