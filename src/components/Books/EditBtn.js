const EditBtn = (props) => {
  const modal = props;
  return (
    <button
      type="button"
      className="remove-button"
      onClick={modal.showModal}
    >
      Edit
    </button>
  );
};

export default EditBtn;
