const JobsForm = () => {
  return (
    <div className="form-grid">
      <input placeholder="JOB TITLE" />
      <input placeholder="DESCRIPTION" />
      <input placeholder="LOCATION" />

      <input placeholder="SALARY" />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" />

      <button className="post-btn">POST</button>
    </div>
  );
};

export default JobsForm;