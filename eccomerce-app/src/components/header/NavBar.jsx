import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../logo/CartWidget';


function NavBar() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link href='#home'>la parfumerie</Nav.Link>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#perfumes">Perfumes</Nav.Link>
              <Nav.Link href="#tiendas">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
          
        </Navbar>
      </header>
    </>
  )
}

export { NavBar };
