const UpdateProgressBtn = (props) => {
  const modal = props;
  return (
    <>
      <button type="button" className="progress" onClick={modal.showProgress}>
        UPDATE PROGRESS
      </button>
    </>
  );
};

export default UpdateProgressBtn;
