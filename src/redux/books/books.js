import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const sendBookToAPI = (payload) => async (dispatch) => {
  const { id, category, title } = payload;

  const newBook = {
    item_id: id,
    category,
    title,
  };

  await axios.post(`${baseURL}/apps/Oni2oDx3ZuyHK8SWio2T/books`, newBook);
  dispatch(addBook(payload));
};

export const getBookFromAPI = () => async (dispatch) => {
  const books = await axios.get(`${baseURL}/apps/Oni2oDx3ZuyHK8SWio2T/books`);
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(getBook(mapBooks));
};

export const deleteBookFromAPI = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/apps/Oni2oDx3ZuyHK8SWio2T/books/${id}`);
  dispatch(removeBook({ id }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case GET_BOOK:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
