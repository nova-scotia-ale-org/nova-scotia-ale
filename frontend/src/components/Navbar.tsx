import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { useAuth } from "../context/AuthContext";

const AppNavbar = () => {
  const { user, isAuthenticated, logout } = useAuth(); // ✅ INSIDE component
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <Container className="d-flex justify-content-between">
          <div className="contact-info">
            +45 345 3324 56789
          </div>

          <div className="right-links">
            {isAuthenticated ? (
              <>
                <span className="nav-link-btn">
                  {user?.name || user?.email}
                </span>

                {user?.role === "admin" && (
                  <Link to="/admin" className="nav-link-btn">
                    Admin Dashboard
                  </Link>
                )}

                <span onClick={handleLogout} className="nav-link-btn">
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link-btn">
                  Login
                </Link>
                <Link to="/register" className="nav-link-btn">
                  Register
                </Link>
              </>
            )}
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Nova Scotia Ale Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
              <Nav.Link as={Link} to="/offers">OFFERS</Nav.Link>
              <Nav.Link as={Link} to="/news">NEWS</Nav.Link>
              <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;