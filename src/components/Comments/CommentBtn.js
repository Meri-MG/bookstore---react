import { Link } from 'react-router-dom';

const CommentBtn = (props) => {
  const book = props;
  return (
    <>
      <Link to={`/books/${book.id}`}>
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
