import { useRequireAuthAction } from "../../hooks/useRequireAuthAction";

const RidesForm = () => {
  const { requireAuth } = useRequireAuthAction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await requireAuth("Please login to post a ride.");
    if (!ok) return;

    console.log("Ride submitted!");
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input placeholder="FROM" required />
      <input placeholder="TO" required />
      <input type="date" required />
      <input placeholder="PRICE" type="number" required />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" type="email" required />

      <button type="submit" className="post-btn">
        POST
      </button>
    </form>
  );
};

export default RidesForm;