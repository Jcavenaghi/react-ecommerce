import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../logo/CartWidget';
import { LinkContainer } from 'react-router-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import { CartContext } from '../context/cartProvider';
import { useContext, useEffect } from 'react';

function NavBar() {
  const { loadCartFromLocalStorage } = useContext(CartContext)

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);  
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to={"/"}>
              <NavbarBrand>la parfumerie</NavbarBrand>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to= {"/perfumes"}>
                <Nav.Link>Perfumes</Nav.Link>
                </LinkContainer>

              <LinkContainer to= "/category/1">
                <Nav.Link >Masculinos</Nav.Link>
              </LinkContainer>
              <LinkContainer to= "/category/2">
                <Nav.Link >Femeninos</Nav.Link>
              </LinkContainer>
            </Nav>
            <LinkContainer to= "/cart">
                <Nav.Link ><CartWidget/></Nav.Link>
            </LinkContainer>
          </Container>
          
        </Navbar>
      </header>
    </>
  )
}

export { NavBar };
