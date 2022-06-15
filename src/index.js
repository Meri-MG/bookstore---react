import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navigation from './components/Navigation';
import Books from './components/Books/Books';
import BookInput from './components/Books/BookInput';
import CommentBtn from './components/Books/CommentBtn';
import Categories from './components/Categories/Categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/new_book" element={<BookInput />} />
          <Route path="/new_comment" element={<CommentBtn />} />

          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
