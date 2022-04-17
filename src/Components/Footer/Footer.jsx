import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col>
                  <div className="text-center">
                    <p>All Rights Reserved By Developer Achem</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Footer;