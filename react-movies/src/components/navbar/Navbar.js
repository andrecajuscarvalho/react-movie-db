import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          <Navbar.Brand>
            <i className="fa-solid fa-bolt"></i>MSPdb
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
            <Link className="nav-link" to="/series">
              Series
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
