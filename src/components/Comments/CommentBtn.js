import { Link } from 'react-router-dom';

const CommentBtn = (props) => {
  const book = props;
  console.log(book.id, 'from commentbtn');
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
