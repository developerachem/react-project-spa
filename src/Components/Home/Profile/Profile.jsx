import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './Profile.css'
const Profile = () => {
  // Profile Params State Managment
  const [ singelData , setSingelData ] = useState([])

  // Profile Params
  const {id} = useParams();

  // Use Effect Hoock
  useEffect(() => {
    // Data Get Axios
    axios.get('http://localhost:5050/devsData/' + id).then( res => {
      setSingelData( res.data )
    })
  },[])

  // Devs Data Delete Handaler
  const handelAcDelete = (id) => {
    // Axios Delete
    axios.delete( 'http://localhost:5050/devsData/' + id )
  }

  return (
    <>
      <section className="profile_section my-5">
        <Container>
          <Row>
            <Col md="4">
              <Card className='bg-dark text-light'>
                <Card.Body className='text-center'>
                  <Image src={ singelData.image } />
                  <h1>{ singelData.name }</h1>
                  <p>{ singelData.skill }</p>
                  <Button>Follow</Button>
                  <button className='btn btn-outline-primary'>Massage</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="8">
              <div className="profile_info rounded overflow-hidden text-light">
                <h2>Personal Info</h2>
                <Table striped hover bordered variant='dark' className='rounded overflow-hidden'>
                  <tbody>
                    <tr>
                      <th><i class='bx bxs-id-card'></i> ID : </th>
                      <th>{ singelData.id }</th>
                    </tr>
                    <tr>
                      <th> <i class='bx bxs-user'></i> User Name : </th>
                      <th>{ singelData.uName }</th>
                    </tr>
                    <tr>
                      <th><i class='bx bx-envelope' ></i> Gmail : </th>
                      <th>{ singelData.email }</th>
                    </tr>
                    <tr>
                      <th><i class='bx bx-phone' ></i> Phone : </th>
                      <th>{ singelData.phone }</th>
                    </tr>
                    <tr>
                      <th><i class='bx bx-male-female'></i> Gender</th>
                      <th>{ singelData.gender }</th>
                    </tr>
                    
                  </tbody>
                  
                </Table>
              </div>
              <div className="social_info rounded overflow-hidden text-light mt-3">
                <h2>Social Link</h2>
                <Table striped hover  variant='dark' bordered className='rounded overflow-hidden'>
                    <tbody>
                    {
                      singelData.facebook && <tr>
                        <th><i class='bx bxl-facebook'></i> Facebook</th>
                        <th>{ singelData.facebook }</th>
                      </tr>
                    }
                    {
                      singelData.twitter && <tr>
                        <th><i class='bx bxl-twitter'></i> Twitter</th>
                        <th>{ singelData.twitter }</th>
                      </tr>
                    }
                    {
                      singelData.linkedin && <tr>
                        <th><i class='bx bxl-linkedin'></i> Linkedin</th>
                        <th>{ singelData.linkedin }</th>
                      </tr>
                    }
                    {
                      singelData.instagram && <tr>
                        <th><i class='bx bxl-instagram'></i> Instagram</th>
                        <th>{ singelData.instagram }</th>
                      </tr>
                    }
                    {
                      singelData.github &&  <tr>
                        <th><i class='bx bxl-github'></i> Github</th>
                        <th>{ singelData.github }</th>
                      </tr>
                    }
                    {
                      singelData.youtube && <tr>
                        <th><i class='bx bxl-youtube'></i> Youtube</th>
                        <th>{ singelData.youtube }</th>
                      </tr>
                    }
                    </tbody>
                </Table>

                <div className="text-end">
                  <button onClick={ e => handelAcDelete(singelData.id)} className='btn btn-outline-danger'><i class='bx bx-trash' ></i> Delete Account</button> &nbsp;
                  <Link to={ `/profile/${ singelData.id }/edit` } className='btn btn-outline-info btn sm'><i class='bx bx-edit'></i> Edit Profile</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Profile