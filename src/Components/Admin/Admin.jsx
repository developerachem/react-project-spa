import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap';

import './Admin.css'
import { Link } from 'react-router-dom';
const Admin = () => {

    // Account Unlock Handaler
    const handelUnlockAccount = (id)=> {
        // Data Replace to Axios
        axios.patch('http://localhost:5050/devsData/' + id , {
            status: true
        })
    }

    // Account Lock Handaler
    const handelLockAccount = (id)=> {
        // Data Replace to Axios
        axios.patch('http://localhost:5050/devsData/' + id , {
            status: false
        })
    }

    // Admin Table State Managment
    const [ data , setData ] = useState([])

    // Use Effect Hock
    useEffect(() => {
        // Data Get Form Server To Axios
        axios.get('http://localhost:5050/devsData').then( res => {
            setData( res.data )
        } , [data])
    })

    // Devs Data Delete Handaler
    const handelDevsDelete = (id) => {
        // Axios Delete
        axios.delete( 'http://localhost:5050/devsData/' + id )
    }

    return (
        <>
            <section className='my-5 dashbord'>
                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered variant='dark' hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Gender</th>
                                        <th>Skill</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value , index) => 
                                            <tr key={index}>
                                                <td>{ index + 1 }</td>
                                                <td><Image src={ value.image } /></td>
                                                <td>{ value.name}</td>
                                                <td>@{ value.uName }</td>
                                                <td>{ value.email }</td>
                                                <td>{ value.phone }</td>
                                                <td>{ value.gender }</td>
                                                <td>{ value.skill }</td>
                                                <td>{ value.status ? 'Approve' : 'Pending' }</td>
                                                <td>
                                                    <Link to={`/profile/${ value.id }`} className='btn btn-sm btn-outline-info' title='Show'><i className='bx bx-show'></i></Link>
                                                    <button className='btn btn-sm btn-outline-success' onClick={ () => handelUnlockAccount(value.id)} title='UnFreez Acount'><i className='bx bx-lock-open-alt'></i></button>
                                                    <button className='btn btn-sm btn-outline-light' onClick={ () => handelLockAccount( value.id ) } title='Freez Acount'><i className='bx bx-lock-alt'></i></button>
                                                    <Link to={ `/profile/${ value.id }/edit` } className='btn btn-sm btn-outline-warning' title='Edit'><i className='bx bx-edit'></i></Link>
                                                    <button className='btn btn-sm btn-outline-danger' onClick={ e => handelDevsDelete(value.id ) } title='Delete'><i className='bx bx-trash'></i></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                            <div className="text-end">
                                <Link to="/regstration" className='btn btn-sm btn-outline-success'> Add New Devs + </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Admin;