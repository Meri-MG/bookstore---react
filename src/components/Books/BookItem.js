import React from 'react';
import { useDispatch } from 'react-redux';
import RemoveBtn from './RemoveBtn';
import CommentBtn from '../Comments/CommentBtn';
import EditBtn from './EditBtn';
import { getCommentFromAPI } from '../../redux/comments/comments';

const BookItem = (props) => {
  const book = props;
  const dispatch = useDispatch();
  const showCommentsPage = (id) => {
    dispatch(getCommentFromAPI(id)).then(() => {});
  };

  return (
    <div className="bookItemCont">
      <div className="bookItem">
        <div className="book_info">
          <li className="category">{book.data.category}</li>
          <li className="book">{book.data.title}</li>
          <li className="author">{book.data.author}</li>
        </div>
        <div className="btn_wrapper">
          <CommentBtn
            comments={book.data.comments_counter}
            onClick={() => showCommentsPage(book.data.id)}
            id={book.data.id}
          />
          <RemoveBtn id={book.data.id} />
          <EditBtn className="" />
        </div>
      </div>
      <div className="wrapper-round">
        <div className="round" />
        <div className="per">
          <h3 className="percent top">64%</h3>
          <p className="percent">Completed</p>
        </div>
      </div>
      <div className="current">
        <p className="cur-head">CURRENT CHAPTER</p>
        <p className="cur-head sec">
          Chapter-
          {book.data.chapter}
        </p>
        <input className="progress" type="button" value="UPDATE PROGRESS" />
      </div>
    </div>
  );
};

export default BookItem;
