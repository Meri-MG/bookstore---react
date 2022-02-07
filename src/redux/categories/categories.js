import axios from 'axios';

const GET_CATEGORY = 'bookStore/books/GET_CATEGORY';
const ADD_CATEGORY = 'bookStore/books/ADD_CATEGORY';
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

export const getCategoryFromAPI = () => async (dispatch) => {
  const category = await axios.get(`${baseURL2}/getAll`);
  dispatch(getCategory(category));
};

export const sendCategoryToAPI = (payload) => async (dispatch) => {
  console.log(payload, 'this is payload');
  const { name } = payload;

  const newCategory = {
    name,
  };
  await axios.post(
    `${baseURL2}/create`,
    newCategory,
  );
  dispatch(addCategory(payload));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case GET_CATEGORY:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default reducer;
