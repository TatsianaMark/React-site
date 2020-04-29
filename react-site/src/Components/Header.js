import React, {Component} from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <>
               <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                   <Container>
                       <Navbar.Brand href="/" >
                             <div>Photographer Katrin</div>
                       </Navbar.Brand>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                           <Nav className="ml-auto">
                               <Nav.Link href="/"> Главная </Nav.Link>
                               <Nav.Link href="/about"> Обо мне </Nav.Link>
                               <Nav.Link href="/services"> Услуги </Nav.Link>
                               <Nav.Link href="/portfolio"> Портфолио </Nav.Link>
                               <Nav.Link href="/contacts"> Контакты </Nav.Link>
                           </Nav>
                       </Navbar.Collapse>
                       </Container>
               </Navbar>
            </>
        );
    }
}

