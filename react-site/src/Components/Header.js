import React from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Contacts from "../Pages/Contacts";
import logo from '../assets/img/logo.png'




export default function Header() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" className="d-flex">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-block align-top mr-2"
                                alt="Logo"
                            />
                            <div className='logo_title'>Photographer Katrin</div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to='/'>Главная</Nav.Link>
                                <Nav.Link as={Link} to="/about"> Обо мне </Nav.Link>
                                <Nav.Link as={Link} to="/services"> Услуги </Nav.Link>
                                <Nav.Link as={Link} to="/portfolio"> Портфолио </Nav.Link>
                                <Nav.Link as={Link} to="/contacts"> Контакты </Nav.Link>
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
