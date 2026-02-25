import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AccommodationForm = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      await Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to post accommodation.",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#FFD628",
        background: "#000",
        color: "#fff",
      });

      navigate("/login", {
        state: { from: "/accommodation" },
      });

      return;
    }

    // 🔥 If logged in
    console.log("Form submitted!");
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