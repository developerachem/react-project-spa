import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, CloseButton, Col, Container, Form, Row } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    
    // Next Step State Managment
    const [ firsrStep , seFirsrStep ] = useState(true);
    // Back Step State Managment
    const [ secondStep , sesecondStep ] = useState(false);

    // Next Step Clock Handling
    const handelNextStep = () => {
        seFirsrStep(false);
        sesecondStep(true);
    };
    // Back Step Clock Handling
    const handelBackStep = () => {
        seFirsrStep(true);
        sesecondStep(false);
    };

    //Form State Managment
    const [ form , setForm ] = useState({
        name : '',
        uName : '',
        email : '',
        phone : '',
        gender : '',
        skill : '',
        image : '',
        facebook : '',
        twitter : '',
        instagram : '',
        linkedin : '',
        github : '',
        youtube : '',
        status : false
    });

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

    // Form Value Dustaccaring
    const { name , uName , email , phone , gender , skill , image , facebook , twitter , instagram , linkedin , github , youtube } = form;

    // Devs Data Submit Handaler
    const handelSubmitEvent = (e) => {
        e.preventDefault()

        // Form Validation
        if( name === "" || uName === "" || email === "" || phone === "" || skill === "" || image === "" ){
            
            // Alert Update
            setAlert({
                status : true,
                type : "danger",
                msg : "All Field Are Required !"
            })

        }else{
            
            // Data Send To Server From Devs Data Form in Axios
            axios.post('http://localhost:5050/devsData' , form ).then( res => {
                 // Alert Update
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

                // Form Reseting
                setForm({
                    name : '',
                    uName : '',
                    email : '',
                    phone : '',
                    gender : '',
                    skill : '',
                    image : '',
                    facebook : '',
                    twitter : '',
                    instagram : '',
                    linkedin : '',
                    github : '',
                    youtube : ''
                })

                // Back Step Clock Handling
                seFirsrStep(true);
                sesecondStep(false);
            })
        }
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="regstration">
                                <div className="regstration_logo">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                                </div>
                                <div className="regstration_form text-white">
                                    <h2>Registration </h2>
                                    <hr />
                                    {
                                        alert.status && <Alert variant={ alert.type } className="d-flex justify-content-between">{ alert.msg } <CloseButton onClick={handelAlertClose}></CloseButton> </Alert>
                                    }
                                    <Form onSubmit={ e => handelSubmitEvent(e) }>
                                        {
                                            firsrStep && <div className="first_step">
                                                <div className="mb-3">
                                                    <Form.Label> Name : </Form.Label>
                                                    <Form.Control type='text' value={ name } onChange={ e => setForm({ ...form , name : e.target.value })} placeholder='Name'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> User Name : </Form.Label>
                                                    <Form.Control type='text' value={ uName } onChange={ e => setForm({ ...form , uName : e.target.value })} placeholder='User Name'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Email : </Form.Label>
                                                    <Form.Control type='text' value={ email } onChange={ e => setForm({ ...form , email : e.target.value })} placeholder='Email'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Phone : </Form.Label>
                                                    <Form.Control type='text' value={ phone } onChange={ e => setForm({ ...form , phone : e.target.value })} placeholder='Phone'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Gender : </Form.Label>
                                                    <hr />
                                                    <input type="radio" id="Male" name='gender' onChange={ e => setForm({ ...form , gender : e.target.value })} value='Male' /> <label htmlFor="Male">Male</label> &nbsp;
                                                    <input type="radio" id="Female" name='gender' onChange={ e => setForm({ ...form , gender : e.target.value })} value='Female' /> <label htmlFor="Female">Female</label>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Skill : </Form.Label>
                                                    <Form.Control type='text' value={ skill } onChange={ e => setForm({ ...form , skill : e.target.value })} placeholder='Skill'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Image URL : </Form.Label>
                                                    <Form.Control type='text' value={ image } onChange={ e => setForm({ ...form , image : e.target.value })} placeholder='Image URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Button className='btn btn-success w-100' onClick={handelNextStep}> Next Step </Button>
                                                </div>
                                            </div>
                                        }

                                        {
                                            secondStep && <div className="second_step">
                                                <div className="mb-3">
                                                    <Form.Label> Facebook URL : </Form.Label>
                                                    <Form.Control type='text' value={ facebook } onChange={ e => setForm({ ...form , facebook : e.target.value })} placeholder='Facebook URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Twitter URL : </Form.Label>
                                                    <Form.Control type='text' value={twitter} onChange={ e => setForm({ ...form , twitter : e.target.value })} placeholder='Twitter URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Instagram URL : </Form.Label>
                                                    <Form.Control type='text' value={instagram} onChange={ e => setForm({ ...form , instagram : e.target.value })} placeholder='Instagram URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Linkedin URL : </Form.Label>
                                                    <Form.Control type='text'value={linkedin} onChange={ e => setForm({ ...form , linkedin : e.target.value })} placeholder='Linkedin URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label> Github URL : </Form.Label>
                                                    <Form.Control type='text' value={github} onChange={ e => setForm({ ...form , github : e.target.value })} placeholder='Github URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Form.Label>Youtube URL : </Form.Label>
                                                    <Form.Control type='text' value={youtube} onChange={ e => setForm({ ...form , youtube : e.target.value })} placeholder='Youtube URL'></Form.Control>
                                                </div>
                                                <div className="mb-3">
                                                    <Button type='submit' className='btn btn-success w-100'>regstration</Button>
                                                </div>
                                                <Button className='btn btn-info btn-sm' onClick={handelBackStep}>Back</Button>
                                            </div>
                                        }
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;