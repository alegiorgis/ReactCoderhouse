import React from 'react';
import { Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../logo.png';
import ItemLink from '../Link';
import { ItemLinkProducto } from '../Link';
import './styles.css';

const NavBar = () => {
    return (
        <Navbar className='nav-bg' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'> 
                        <img src={Logo} alt='Logo Venex' title='Logo Venex' className='nav-logo' loading='lazy' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavDropdown title='PRODUCTO' id='basic-nav-dropdown'>
                            <ItemLinkProducto />
                        </NavDropdown>
                        <ItemLink />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;