import axios from 'axios';

const GET_CATEGORY = 'bookStore/books/GET_CATEGORY';
const ADD_CATEGORY = 'bookStore/books/ADD_CATEGORY';
const DELETE_CATEGORY = 'bookStore/books/DELETE_CATEGORY';
const initialState = [];

const baseURL2 = 'http://18.197.248.204:2020/api/category';

export const getCategory = (payload) => ({
  type: GET_CATEGORY,
  payload,
});

export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});

export const deleteCategory = (payload) => ({
  type: DELETE_CATEGORY,
  payload,
});

export const getCategoryFromAPI = () => async (dispatch) => {
  const category = await axios.get(`${baseURL2}/getAll`);
  dispatch(getCategory(category));
};

export const sendCategoryToAPI = (payload) => async (dispatch) => {
  const { name } = payload;

  const newCategory = {
    name,
  };
  await axios.post(`${baseURL2}/create`, newCategory);
  dispatch(addCategory(payload));
};

export const deleteCategoryFromAPI = (id) => async (dispatch) => {
  await axios.delete(`${baseURL2}/delete?id=${id}`);
  dispatch(deleteCategory({ id }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case GET_CATEGORY:
      return [...action.payload.data];
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
