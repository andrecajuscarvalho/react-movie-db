import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link>
          <Link className="nav-link" to="/">
            <Navbar.Brand>
              <i class="fa-solid fa-bolt"></i>MSPdb
            </Navbar.Brand>
          </Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/series">
                Series
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/people">
                People
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
