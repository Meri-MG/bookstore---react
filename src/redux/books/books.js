import getData from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const REMOVE_BOOK_SUCCESS = 'bookStore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'bookStore/books/REMOVE_BOOK_FAILURE';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const updateBook = (payload) => ({
  type: UPDATE_BOOK,
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
  const {
    author, title, category, chapter,
  } = payload;
  const book = {
    author,
    title,
    category,
    chapter,
  };
  await getData.post('books/', book);
  dispatch(addBook(payload));
};

export const updateBookToAPI = (payload) => async (dispatch) => {
  const {
    id, author, title, category, chapter,
  } = payload;
  const book = {
    id,
    author,
    title,
    category,
    chapter,
  };
  await getData.patch(`books/${id}`, book);
  dispatch(updateBook(payload));
};

export const getBookFromAPI = () => async (dispatch) => {
  try {
    await getData('books/').then((response) => {
      const books = response.data;
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
    case UPDATE_BOOK:
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
