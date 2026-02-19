import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const AppNavbar = () => {
    return (
        <div className="header-wrapper">

            {/* Top Bar */}
            <div className="top-bar">
                <Container className="d-flex justify-content-between">
                    <div className="contact-info">
                        +45 345 3324 56789
                        </div>
                    <div className="right-links">
                        <span>Login</span>
                        <span>Register</span>
                    </div>
                </Container>
            </div>

            {/* Main Navbar */}
            <Navbar expand="lg" bg="dark" variant="dark" className="main-navbar">
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