import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProgress = (props) => {
  const data = props;
  const [toPage, setToPage] = useState(0);
  const [fromPage, setFromPage] = useState(0);

  const navigate = useNavigate();
  const total = toPage / fromPage / 0.01;
  const result = Number.isNaN(total) ? 0 : total;
  const updateProgressOnBook = (e) => {
    e.preventDefault();
    navigate('/');
    data.showProgressBar(Math.round(result));
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
      <div className="centered progress_centered">
        <div className="modal progress_modal">
          <form className="modal_actions progress_actions">
            <p className="progress_para">How many pages have you read:</p>
            <input
              type="number"
              value={toPage}
              name="title"
              onChange={(e) => setToPage(e.target.value)}
              required
            />
            <p className="progress_para">from:</p>
            <input
              type="number"
              value={fromPage}
              name="title"
              onChange={(e) => setFromPage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="input-add save"
              onClick={updateProgressOnBook}
            >
              Save Progress
            </button>
            <button
              type="button"
              className="input-add cancel"
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
