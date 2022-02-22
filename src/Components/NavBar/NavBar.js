import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import '../../Style/custom_style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return(
        <Navbar id='navbar-props'> 
  <Container>
    <Navbar.Brand href="#home"><div className="navbar-logo"></div></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  >
      <Nav className="navbar-links">
        
          <LinkContainer className='home-nav' to="/">
          <Nav.Link className="ms-3 home-nav"  href="/">Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/jobs">
          <Nav.Link className="ms-3 jobs-nav" href="/jobs">Jobs</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/FAQ">
          <Nav.Link className="ms-3 faq-nav" href="/FAQ">FAQ</Nav.Link>
          </LinkContainer>

          <LinkContainer to="favorites">
          <Nav.Link className="ms-3 me-3 favorites-nav" href="/favorites">Favorites</Nav.Link>
          </LinkContainer>
          
          <Button variant="outline-primary" className="me-2 text-light"> <FontAwesomeIcon icon={faPlus}/> Register</Button>
          <Button variant="outline-primary" className="ms-2 text-light"> <FontAwesomeIcon icon={faUser}/> Log In</Button>
        

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;