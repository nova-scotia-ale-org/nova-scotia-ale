import { useRequireAuthAction } from "../../hooks/useRequireAuthAction";

const JobsForm = () => {
  const { requireAuth } = useRequireAuthAction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await requireAuth("Please login to post a job.");
    if (!ok) return;

    // ✅ Logged in → proceed with API call later
    console.log("Job form submitted!");
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input placeholder="JOB TITLE" required />
      <input placeholder="DESCRIPTION" required />
      <input placeholder="LOCATION" required />
      <input placeholder="SALARY" required />
      <input type="file" />
      <input placeholder="CONTACT EMAIL" type="email" required />

      <button type="submit" className="post-btn">
        POST
      </button>
    </form>
  );
};

export default JobsForm;