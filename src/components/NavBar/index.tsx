import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icons, Contact, Main } from './style';
import faceIcon from "@/icons/faceIcon.png";
import instaIcon from "@/icons/Instagram_icon.png";
import whatsIcon from "@/icons/WhatsIcon.png";
import charisIcon from "@/icons/charisIcon.png"
import "./index.css";
import {useEffect, useState } from 'react';


export default function OffcanvasExample() {
    let expand = "xxl";
    const [show, setShow] = useState(true);

    useEffect(()=>{
      document.getElementById("btn")?.addEventListener("click", () => {
        setShow(false);
      })
    })

  return (
    <Main>
        <Navbar expand={expand} className="navbar navbar-expand-lg navbar-dark">
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



