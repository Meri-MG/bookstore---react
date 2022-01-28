import axios from 'axios';

const GET_CATEGORY = 'bookStore/books/GET_CATEGORY';
const initialState = [];

const baseURL2 = 'http://18.197.248.204:2020/api/category';

export const getCategory = (payload) => ({
  type: GET_CATEGORY,
  payload,
});

export const getCategoryFromAPI = () => async (dispatch) => {
  const category = await axios.get(`${baseURL2}/getAll`);
  dispatch(getCategory(category));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default reducer;
