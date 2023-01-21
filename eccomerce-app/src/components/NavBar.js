import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">la parfumerie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#perfumes">Perfumes</Nav.Link>
            <Nav.Link href="#tiendas">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
          <ItemListContainer/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
