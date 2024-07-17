import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import reactLogo from '../assets/react.svg'

function MyNavbar(){


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="nav">
            <Navbar.Brand className="nav-title" as={Link} to='/'>
              <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
              </a>Rick And Morty
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="link" as={Link} to='/characters'>Characters</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyNavbar