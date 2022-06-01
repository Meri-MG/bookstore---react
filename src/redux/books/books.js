import getData from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

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
  console.log(payload, 'payload from books');
  dispatch(addBook(payload));
  getData();
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
