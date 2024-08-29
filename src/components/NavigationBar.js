import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="/">
            TestFilms
          </Navbar.Brand>
          <Nav>
            <Nav.Link style={{ color: "white" }} href="#action">
              Action
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#multiverse">
              Multiverse
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
