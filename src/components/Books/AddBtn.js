import { Link } from 'react-router-dom';

const AddBtn = () => (
  <div className="addBtn_container">
    <Link to="/books">
      <button type="button" className="input-add">
        Add Book
      </button>
    </Link>
  </div>
);

export default AddBtn;
