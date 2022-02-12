import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../logo.png';
import './styles.css';

const Footer = () => {
    return (
    <Container fluid className='footer'>
        <Row className='text-center py-4 pl-md-3 pr-md-3'>
            <Col xs={12} className='footer-main-text'>
                Pagina creada con fines academicos
            </Col>
            <Col xs={12} className='mt-4 divider'></Col>
            <Col xs={12} className='mt-4'>2022 © VENEX.</Col>
        </Row>
    </Container>
)};

export default Footer;


