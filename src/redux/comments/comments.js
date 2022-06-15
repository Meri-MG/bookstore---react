import getData from '../../api/api';

const GET_COMMENT = 'bookStore/books/GET_COMMENT';
const ADD_COMMENT = 'bookStore/books/ADD_COMMENT';
const REMOVE_COMMENT_SUCCESS = 'bookStore/books/REMOVE_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'bookStore/books/REMOVE_COMMENT_FAILURE';
const initialState = [];

export const getComment = (payload) => ({
  type: GET_COMMENT,
  payload,
});

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload,
});

export const removeComment = (payload) => ({
  type: REMOVE_COMMENT_SUCCESS,
  payload,
});

export const getCommentFromAPI = (id) => async (dispatch) => {
  try {
    await getData(`books/${id}/comments`).then((response) => {
      const comments = response.data;
      dispatch(getComment(comments));
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendCommentToAPI = (payload) => async (dispatch) => {
  console.log(payload, 'payload from comments');
  const { text, book } = payload;
  const comment = {
    text,
    book,
  };
  await getData.post(`books/${book}/comments`, comment);
  dispatch(addComment(payload));
};

export const removeCommentFromAPI = (id, book) => async (dispatch) => {
  try {
    dispatch(removeComment(id, book));
    await getData
      .delete(`books/${book}/comments/${id}`)
      .then((response) => dispatch({ type: REMOVE_COMMENT_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_COMMENT_FAILURE, error });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case GET_COMMENT:
      return [...action.payload];
    case REMOVE_COMMENT_SUCCESS:
      return state.filter((comment) => comment.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
