const RidesForm = () => {
  return (
    <div className="form-grid">
      <input placeholder="FROM" />
      <input placeholder="TO" />
      <input placeholder="DATE" />

      <input placeholder="PRICE" />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" />

      <button className="post-btn">POST</button>
    </div>
  );
};

export default RidesForm;