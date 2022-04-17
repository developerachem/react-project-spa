import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {

  // Devs Data State Management
  const [ devsData , setDevsData ] = useState([])

  // Use Effect Hock
  useEffect(() => {
    // Data Get Form Server To Axios
    axios.get('http://localhost:5050/devsData').then( res => {
      setDevsData( res.data )
    })
  } , [devsData])

  return (
    <>
      <section className='my-5 homePage'>
        <Container>
          <Row>
            {
              devsData.map(( data , index ) => 
                data.status && <Col md="3" className='mb-3'>
                  <Card key={index}>
                    <Card.Img src={ data.image } />
                    <Card.Body>
                      <h3>{ data.name }</h3>
                      <p className='mb-3'>{ data.skill }</p>
                      <ul className='d-flex'>
                        {
                          data.facebook && <li><a href="/" className='btn btn-sm btn-outline-info me-1' title='Facebook'><i className='bx bxl-facebook' ></i></a></li> 
                        }
                        {
                          data.instagram && <li><a href="/" className='btn btn-sm btn-outline-info me-1' title='Instagram'><i className='bx bxl-instagram'></i></a></li>
                        }
                        {
                          data.instagram && <li><a href="/" className='btn btn-sm btn-outline-info me-1' title='Twitter'><i className='bx bxl-twitter'></i></a></li> 
                        }
                        {
                          data.linkedin && <li><a href="/" className='btn btn-sm btn-outline-info me-1' title='Linekdin'><i className='bx bxl-linkedin'></i></a></li>
                        }
                        {
                          data.github && <li><a href="/" className='btn btn-sm btn-outline-info me-1' title='Github'><i className='bx bxl-github' ></i></a></li>  
                        }
                        {
                          data.youtube && <li><a href="/" className='btn btn-sm btn-outline-info' title='Youtube'><i className='bx bxl-youtube' ></i></a></li>
                        }
                      </ul>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between'>
                      <Link to={`/profile/${ data.id }`} className='btn btn-sm btn-info'>Profile</Link>
                      <span>{ index + 1 }</span>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;