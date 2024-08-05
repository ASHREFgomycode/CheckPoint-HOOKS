import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ashflix from '../ashlogo.png'
import { Link } from 'react-router-dom';

const NavMovie =()=>{
    return(
          
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={ashflix}
              width="160"
              height="45"
              style={{ marginLeft: "-46px"}}

              className="d-inline-block align-top"
            />
       
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/movies'>Movies</Nav.Link>
            <Nav.Link href="#pricing">TvShows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    )
}

export default NavMovie