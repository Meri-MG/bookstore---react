import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import commentsReducer from './comments/comments';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
  commentsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
