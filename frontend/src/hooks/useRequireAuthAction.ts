
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

export const useRequireAuthAction = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const requireAuth = async (message?: string) => {
    if (isAuthenticated) return true;

    const res = await Swal.fire({
      icon: "warning",
      title: "Login to continue",
      text: message ?? "Please login to continue.",
      confirmButtonText: "Go to Login",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#FFD628",
      background: "#000",
      color: "#fff",
    });

    if (res.isConfirmed) {
      navigate("/login", { state: { from: location.pathname } });
    }

    return false;
  };

  return { requireAuth };
};