import axios from 'axios';
import React , { useState } from 'react'
import { Button, Col, Form, Modal, Row, FloatingLabel, Alert } from 'react-bootstrap';
import { useProfile } from '../../Pages/Account/Context.Provider';

function Quetion({d_id}) {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState('');
    const {profile} = useProfile();
    const [quetion,setQuetion] = useState({
        name: !profile ? '' : profile.name,
        email: !profile ? '' : profile.email,
        quetion:''
    });

    const QUECTION = [
        {
            name:'name',
            value:quetion.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:quetion.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'quetion',
            value:quetion.quetion,
            type:'text',
            text:'Ask Your Quetion ?'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setQuetion({...quetion, [name]:value});
    }

    const sendQuction = async (e)=>{
        e.preventDefault();
        try{
            setloading(true);
            const quectionSend = await axios.post('https://lifestylediseases.herokuapp.com/quection',{
                user_id: profile ? profile._id : 'NA',
                disease_id: d_id ? d_id : 'NA',
                user_name: quetion.name, 
                user_email: quetion.email, 
                question: quetion.quetion
            })
            setloading(false);
            setMessage(quectionSend.data.message);
            setShow(true);
            setQuetion({
                name: !profile ? '' : profile.name,
                email: !profile ? '' : profile.email,
                quetion:''
            });
        }catch(e){
            setloading(true)
            console.log(e.message);
            setMessage(e.message);
            setloading(false);
        }
    }
    return (
        <>
        <Button className="add_feedback"  onClick={() => setModalShow(true)}>Click Here To Ask Any Queries ?</Button>
        {
            profile
            ?
            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => setModalShow(false)}>
                    <Modal.Title style={{color:'#008aff', fontWeight:700}} id="contained-modal-title-vcenter">
                        Ask Quetion ?
                    </Modal.Title>
                </Modal.Header>
                { 
                    show ?
                        <Alert variant="info" onClose={() => {
                             setShow(false);
                            }
                        } dismissible>
                            <p className='text-center'>{message}</p>
                        </Alert>
                        :
                        ''
                }
                <Modal.Body>
                    <Form className="account_form_body mt-2">
                        {QUECTION.map(item =>(
                            <Row key={item.text}>
                                <Col xl={12}>
                                    { 
                                        item.name === 'quetion' ?
                                            <FloatingLabel className="mb-3" controlId="floatingTextarea2" label={item.text}>
                                                <Form.Control
                                                name={item.name}
                                                type={item.type}
                                                value={item.value}
                                                onChange={inputHandler}
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '150px' }}
                                                />
                                            </FloatingLabel>
                                        :
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                            name={item.name}
                                            type={item.type}
                                            value={item.value}
                                            onChange={inputHandler}
                                            placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInputCustom">{item.text}</label>
                                        </Form.Floating>
                                    }
                                </Col>
                            </Row>
                            ))
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'center'}}>
                    <Button style={{ backgroundColor: '#008aff',
                        fontFamily: `Poppins, sans-serif`,
                        fontWeight:'500'}} disabled={!quetion.quetion} onClick={sendQuction}>{loading ? 'Processing...' : 'Ask Quetion'}</Button>
                </Modal.Footer>
            </Modal>
            :
            <Modal
                    show={modalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header className="text-danger" closeButton onClick={() => setModalShow(false)}>
                        <Modal.Title style={{color:'#008aff', fontWeight:700}} id="contained-modal-title-vcenter">
                            Ask Quetion ?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{color: 'red', fontWeight:700}}>
                        Please First of all Login Then Ask Any Quection !
                        Thank You For Chooseing E Health Care !
                    </Modal.Body>
            </Modal>
        }
        </>
    )
}


export default Quetion
