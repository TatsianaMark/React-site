import React, {Component} from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Contacts from "../Pages/Contacts";




export default function Header() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <div className='logo'>Photographer Katrin</div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to='/'>Главная</Nav.Link>
                                <Nav.Link as={Link} to="/about"> Обо мне </Nav.Link>
                                <Nav.Link as={Link} to="/services"> Услуги </Nav.Link>
                                <Nav.Link as={Link} to="/portfolio"> Портфолио </Nav.Link>
                                <Nav.Link as={Link} to="/contacts"> Контакты </Nav.Link>



                                {/*<Nav.Link href="/"> Главная </Nav.Link>*/}
                                {/*<Nav.Link href="/about"> Обо мне </Nav.Link>*/}
                                {/*<Nav.Link href="/services"> Услуги </Nav.Link>*/}
                                {/*<Nav.Link href="/portfolio"> Портфолио </Nav.Link>*/}
                                {/*<Nav.Link href="/contacts"> Контакты </Nav.Link>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    {/*<Route component={Default} />*/}
                </Switch>
            </Router>
        </>
    );
}
