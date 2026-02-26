import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser } from "react-icons/fa";
import "./UserMenu.css";
import Swal from "sweetalert2";

const UserMenu = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    if (!user) return null;

    const handleLogout = async () => {
        setOpen(false);
        const styles = getComputedStyle(document.documentElement);

        const primary = styles.getPropertyValue("--color-primary").trim();
        const secondary = styles.getPropertyValue("--color-secondary").trim();
        const accent = styles.getPropertyValue("--color-accent").trim();

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You will be signed out of your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Stay Logged In",
            confirmButtonColor: primary,
            background: secondary,
            color: accent,
            iconColor: primary,
            customClass: {
                cancelButton: "swal-cancel-custom",
            },
        });

        if (result.isConfirmed) {
            await logout();

            await Swal.fire({
                icon: "success",
                title: "Logged Out Successfully 👋",
                showConfirmButton: false,
                timer: 1500,
                background: secondary,
                color: accent,
                iconColor: primary,
            });

            navigate("/");
        }
    };

    const displayName = user.name || "User";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="user-menu" ref={menuRef}>
            <span className="user-display-name">{displayName}</span>

            <div
                className="avatar-circle"
                onClick={() => setOpen(!open)}
            >
                <FaUser size={16} />
            </div>

            {open && (
                <div className="dropdown-menu-custom">
                    <p className="user-name">{displayName}</p>
                    <p className="user-email">{user.email}</p>

                    {user.role === "admin" && (
                        <Link to="/admin" className="dropdown-link">
                            Admin Dashboard
                        </Link>
                    )}

                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;