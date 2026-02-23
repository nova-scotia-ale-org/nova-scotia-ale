const AccommodationForm = () => {
  return (
    <div className="form-grid">
      <input placeholder="TITLE" />
      <input placeholder="DESCRIPTION" />
      <input placeholder="LOCATION" />
      <input placeholder="PRICE" />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" />
      <button className="post-btn">POST</button>
    </div>
  );
};

export default AccommodationForm;