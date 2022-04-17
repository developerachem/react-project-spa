import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
        <section className='main_menu'>
            <Container>
                <Row>
                    <Col md="2">
                        <div className="logo">
                            <Link to="/"><Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' /></Link>
                        </div>
                    </Col>
                    <Col md="8">
                        <div className="menu h-100">
                            <ul className='d-flex justify-content-end align-items-center h-100'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/admin">Dashbord</Link></li>
                                <li><Link to="/">All Devs</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="2" className='d-flex align-items-center'>
                        <Link to="/regstration" className='btn btn-outline-success'> Create New Account </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
};

export default Header;