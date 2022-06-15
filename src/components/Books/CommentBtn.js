import { Link } from 'react-router-dom';

const CommentBtn = (props) => {
  const book = props;
  return (
    <>
      <Link to="/new_comment">
        <button type="button" className="remove-button">
          Comments
          (
          {book.comments}
          )
        </button>
      </Link>
    </>
  );
};

export default CommentBtn;
