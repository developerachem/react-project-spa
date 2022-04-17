import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Button, Row, Image, Form, Alert, CloseButton } from 'react-bootstrap';
import { useParams } from 'react-router';

const EditProfile = () => {

    //Alert State Managment 
    const [ alert , setAlert ] = useState({
        status : false,
        type : "",
        msg : ""
    })

    // Alert Close Handaler
    const handelAlertClose = () => {
        // Alert Reset
        setAlert({
            status : false,
            type : "",
            msg : ""
        })
    }

    // Editt Data Statte Managment
    const [ editData , setEditData ] = useState({
        name: "",
        uName: "",
        email: "",
        phone: "",
        gender: "",
        skill: "",
        image: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        github: "",
        youtube: ""
    })
    console.log(editData);
     // Edit Params
    const {id } = useParams();

    // Edit Data Use Effect
    useEffect(() => {
        // Edit Data Get Form Axios
        axios.get('http://localhost:5050/devsData/' + id ).then( res => {
            setEditData({
                name: res.data.name,
                uName: res.data.uName,
                email: res.data.email,
                phone: res.data.phone,
                gender: "",
                skill: res.data.skill,
                image: res.data.image,
                facebook: res.data.facebook,
                twitter: res.data.twitter,
                instagram: res.data.instagram,
                linkedin: res.data.linkedin,
                github: res.data.github,
                youtube: res.data.youtube
            })
        })
    }, [])

    

    // Edit Form Handaler
    const handelEditForm = (e) => {
        e.preventDefault()
        
        const {name , uName , email , phone , skill , image  } = editData;

        //Form Validation
        if( name === "" || uName === "" || email === "" || phone === "" || skill === "" || image === "" ){
            
            // Alert Update
            setAlert({
                status : true,
                type : "danger",
                msg : "All Field Are Required !"
            })

        }else{

            console.log("data ok");
            
            // Edite Data Patch In Server
            axios.patch('http://localhost:5050/devsData/' + id , editData ).then( res => {
                setAlert({
                    status : true,
                    type : "success",
                    msg : "Success 🥰"
                })

                // Alert Reset Timer
                setTimeout(() => {
                    // ALert Reset
                    setAlert({
                        status : false,
                        type : "",
                        msg : ""
                    })
                }, 5000)
            })
        }


    }

    return (
        <>
            <section className="profile_edit my-5">
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="overview">
                                <Card className='bg-dark text-light'>
                                    <Card.Body className='text-center'>
                                        <Image src={ editData.image } />
                                        <h1>{ editData.name }</h1>
                                        <p>@{ editData.uName }</p>
                                        <p>{ editData.skill }</p>
                                        <p>{ editData.email }</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col md="8">
                            <Card className='bg-dark text-light'>
                                <Card.Body>
                                    <Form onSubmit={ e => handelEditForm(e) }>
                                        {
                                            alert.status && <Alert variant={ alert.type } className="d-flex justify-content-between">{ alert.msg } <CloseButton onClick={handelAlertClose}></CloseButton> </Alert>
                                        }
                                        <Row>
                                            <Col md='6'>
                                                <div className="mb-3">
                                                    <Form.Label>Name :</Form.Label>
                                                    <Form.Control value={ editData.name } onChange={ e => setEditData({ ...editData , name : e.target.value })} placeholder="Name"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>User Name :</Form.Label>
                                                    <Form.Control value={ editData.uName } onChange={ e => setEditData({ ...editData , uName : e.target.value })} placeholder="User Name"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Email :</Form.Label>
                                                    <Form.Control value={ editData.email } onChange={ e => setEditData({ ...editData , email : e.target.value })} placeholder="Email"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Phone :</Form.Label>
                                                    <Form.Control value={ editData.phone } onChange={ e => setEditData({ ...editData , phone : e.target.value })} placeholder="Phone"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Name :</Form.Label> <br />
                                                    <input type="radio" value='Male' id='Male' name='gender' onChange={ e => setEditData({ ...editData , gender : e.target.value })} /> <label htmlFor="Male">Male</label> &nbsp;
                                                    <input type="radio" value='Female' id='Female' name='gender'  onChange={ e => setEditData({ ...editData , gender : e.target.value })} /> <label htmlFor="Female">Female</label>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Skill :</Form.Label>
                                                    <Form.Control value={ editData.skill } onChange={ e => setEditData({ ...editData , skill : e.target.value })} placeholder="Skill"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Image URL :</Form.Label>
                                                    <Form.Control value={ editData.image } onChange={ e => setEditData({ ...editData , image : e.target.value })} placeholder="Image URL"></Form.Control>
                                                </div>
                                            </Col>
                                            <Col md='6'>
                                                <div className="mb-3">
                                                    <Form.Label>Facebook :</Form.Label>
                                                    <Form.Control value={ editData.facebook } onChange={ e => setEditData({ ...editData , facebook : e.target.value })} placeholder="Facebook"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Instagram :</Form.Label>
                                                    <Form.Control value={ editData.instagram } onChange={ e => setEditData({ ...editData , instagram : e.target.value })} placeholder="Instagram"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Twitter :</Form.Label>
                                                    <Form.Control value={ editData.twitter } onChange={ e => setEditData({ ...editData , twitter : e.target.value })} placeholder="Twitter"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Linkedin :</Form.Label>
                                                    <Form.Control value={ editData.linkedin } onChange={ e => setEditData({ ...editData , linkedin : e.target.value })} placeholder="Linkedin"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Github :</Form.Label>
                                                    <Form.Control value={ editData.github } onChange={ e => setEditData({ ...editData , github : e.target.value })} placeholder="Github"></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Youtube :</Form.Label>
                                                    <Form.Control value={ editData.youtube } onChange={ e => setEditData({ ...editData , youtube : e.target.value })} placeholder="Youtube"></Form.Control>
                                                </div>
                                            </Col>
                                        </Row>
                                            <Button className='w-100' type='submit' variant='success'>Update</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default EditProfile;