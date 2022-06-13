import getData from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const REMOVE_BOOK_SUCCESS = 'bookStore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'bookStore/books/REMOVE_BOOK_FAILURE';

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
  try {
    await getData('books/').then((response) => {
      const books = response.data;
      // const mapBooks = [...books.data].map(([id, book]) => {
      //   const { category, title } = book[0];
      //   return { id, category, title };
      // });
      dispatch(getBook(books));
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBookFromApi = (id) => async (dispatch) => {
  try {
    dispatch(removeBook(id));
    await getData
      .delete(`books/${id}`)
      .then((response) => dispatch({ type: REMOVE_BOOK_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_BOOK_FAILURE, error });
  }
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
