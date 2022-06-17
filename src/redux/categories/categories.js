import getData from '../../api/api';

const GET_CATEGORY = 'bookStore/books/GET_CATEGORY';
const GET_CATEGORY_FAILURE = 'bookStore/books/GET_CATEGORY_FAILURE';
const ADD_CATEGORY = 'bookStore/books/ADD_CATEGORY';
const ADD_CATEGORY_FAILURE = 'bookStore/books/ADD_CATEGORY_FAILURE';
const REMOVE_CATEGORY_SUCCESS = 'bookStore/books/REMOVE_CATEGORY_SUCCESS';
const REMOVE_CATEGORY_FAILURE = 'bookStore/books/REMOVE_CATEGORY_FAILURE';
const initialState = [];

export const getCategory = (payload) => ({
  type: GET_CATEGORY,
  payload,
});

export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});

export const removeCategory = (payload) => ({
  type: REMOVE_CATEGORY_SUCCESS,
  payload,
});

export const getCategoryFromAPI = () => async (dispatch) => {
  try {
    await getData('categories/').then((response) => {
      const categories = response.data;
      dispatch(getCategory(categories));
    });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILURE, error });
  }
};

export const sendCategoryToAPI = (payload) => async (dispatch) => {
  const { name } = payload;
  const category = {
    name,
  };
  try {
    await getData.post('categories/', category);
    dispatch(addCategory(payload));
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAILURE, error });
  }
};

export const removeCategoryFromAPI = (id) => async (dispatch) => {
  try {
    dispatch(removeCategory(id));
    await getData
      .delete(`categories/${id}`)
      .then((response) => dispatch({ type: REMOVE_CATEGORY_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_CATEGORY_FAILURE, error });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case GET_CATEGORY:
      return [...action.payload];
    case REMOVE_CATEGORY_SUCCESS:
      return state.filter((category) => category.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
