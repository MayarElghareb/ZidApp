import { Container, Nav, Navbar } from "react-bootstrap";
import "../GlobalCss.css";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0 text-dark "
            
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#about" className="mx-5 text-dark">الرئيسيه</Nav.Link>
            <Nav.Link href="#apps" className="mx-5 text-dark">التصنيفات</Nav.Link>
            <Nav.Link href="#featured"className="mx-5 text-dark">التطبيقات</Nav.Link>
            <Nav.Link href="#footer"className="mx-5 text-dark">طور تطبيق</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
