import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RemoveBtn from './RemoveBtn';
import CommentBtn from '../Comments/CommentBtn';
import EditBtn from './EditBtn';
import EditBook from './EditBook';
import UpdateProgressBtn from './UpdateProgressBtn';
import UpdateProgress from './UpdateProgress';
import ProgressCircle from './ProgressCircle';
import { getCommentFromAPI } from '../../redux/comments/comments';

const BookItem = (props) => {
  const book = props;
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const initializeState = () => JSON.parse(localStorage.getItem(`progress-bar${book.data.id}`)) ?? 0;
  const [total, setTotal] = useState(initializeState());
  const dispatch = useDispatch();

  const showCommentsPage = (id) => {
    dispatch(getCommentFromAPI(id)).then(() => {});
  };

  const showProgressBar = (total) => {
    setTotal(total);
  };

  useEffect(() => {
    localStorage.setItem(`progress-bar${book.data.id}`, JSON.stringify(total));
  }, [total]);

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
          <RemoveBtn setState={book.setState} id={book.data.id} />
          <EditBtn className="" showModal={() => setIsOpen(true)} />
          {isOpen && <EditBook book={book.data} setIsOpen={setIsOpen} />}
        </div>
      </div>
      <div className="wrapper-round">
        <ProgressCircle strokeWidth={4} percentage={total} />
        <div className="per">
          <h3 className="percent top" onChange={showProgressBar}>
            {total}
            %
          </h3>
          <p className="percent">Completed</p>
        </div>
      </div>
      <div className="current">
        <p className="cur-head">CURRENT CHAPTER</p>
        <p className="cur-head sec">
          Chapter-
          {book.data.chapter}
        </p>
        <UpdateProgressBtn
          id={book.data.id}
          showProgress={() => setUpdate(true)}
        />
        {update && (
          <UpdateProgress
            book={book.data}
            setUpdate={setUpdate}
            showProgressBar={showProgressBar}
          />
        )}
      </div>
    </div>
  );
};

export default BookItem;
