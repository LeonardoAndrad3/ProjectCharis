import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icons, Main } from './style';
import charisIcon from "@/icons/charisIcon.png"
import "./index.css";


export default function OffcanvasExample() {
    let expand = "xxl";

  return (
    <Main>
        <Navbar expand={expand} className="navbar navbar-expand-lg navbar-light">
          <Container fluid id={"test"}>
            <Navbar.Brand href="#"><Icons className={"iconCharis"} src={charisIcon}></Icons>
            </Navbar.Brand>
            <Navbar.Toggle id={"btn"} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbarLabel-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={"offcanvas offcanvas-end text-bg-dark"}
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Icons  className={"iconCharis titleCanvas"} src={charisIcon}/> Charis
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav id={"bodyCanvas"} className="colorLink justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Agendamento</Nav.Link>
                    <Nav.Link href="#action1">Blog</Nav.Link>
                    <Nav.Link href="#action2">Login</Nav.Link>
                    <hr/>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </Main>
  );


}



