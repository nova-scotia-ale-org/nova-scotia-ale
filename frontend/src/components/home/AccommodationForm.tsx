import { useRequireAuthAction } from "../../hooks/useRequireAuthAction";

const AccommodationForm = () => {
  const { requireAuth } = useRequireAuthAction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await requireAuth("Please login to post accommodation.");
    if (!ok) return;

    console.log("Accommodation submitted!");
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input placeholder="TITLE" required />
      <input placeholder="DESCRIPTION" required />
      <input placeholder="LOCATION" required />
      <input placeholder="PRICE" type="number" required />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" type="email" required />

      <button type="submit" className="post-btn">
        POST
      </button>
    </form>
  );
};

export default AccommodationForm;