import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProgress = (props) => {
  const data = props;
  const [toPage, setToPage] = useState(0);
  const [fromPage, setFromPage] = useState(0);

  const navigate = useNavigate();

  const total = toPage / fromPage / 0.01;
  const updateProgressOnBook = (e) => {
    e.preventDefault();
    navigate('/');
    data.showProgressBar(Math.round(total));
    data.setUpdate(false);
  };

  return (
    <>
      <div
        className="dark_bg"
        onClick={() => data.setUpdate(false)}
        onKeyDown={() => data.setUpdate(false)}
        role="button"
        tabIndex={0}
        aria-label="dark background"
      />
      <div className="centered">
        <div className="modal">
          <hr />
          <h2>ADD NEW BOOK</h2>
          <form className="modal_actions">
            <input
              type="text"
              placeholder="Book Title"
              value={toPage}
              name="title"
              onChange={(e) => setToPage(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Book Author"
              value={fromPage}
              name="title"
              onChange={(e) => setFromPage(e.target.value)}
              required
            />
            <button
              type="button"
              className="input-add"
              onClick={updateProgressOnBook}
            >
              Save Progress
            </button>
            <button
              type="button"
              className="input-add"
              onClick={() => data.setUpdate(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProgress;
