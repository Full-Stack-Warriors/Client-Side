import axios from 'axios';
import React , { useState } from 'react'
import { Alert, Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { useProfile } from '../../Pages/Account/Context.Provider';

function Feedback({id}) {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState('');
    const {profile} = useProfile();
    const [feedback,setFeedback] = useState({
        name: !profile ? '' : profile.name,
        email: !profile ? '' : profile.email,
        feedback:''
    });
    const FEEDBACK = [
        {
            name:'name',
            value:feedback.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:feedback.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'feedback',
            value:feedback.feedback,
            type:'text',
            text:'Enter Your Valuebale Feedback',
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setFeedback({...feedback, [name]:value});
    }

    const sendFeedback = async (e)=>{
        e.preventDefault();
        try{
            setloading(true);
            const quectionSend = await axios.post('https://lifestylediseases.herokuapp.com/feedback',{
                user_id : profile ? profile._id : 'NA', 
                disease_id: id ? id : 'NA',
                name: feedback.name, 
                email: feedback.email, 
                feedback: feedback.feedback, 
            })
            setloading(false);
            setMessage(quectionSend.data.message);
            setShow(true);
            setFeedback({
                name: !profile ? '' : profile.name,
                email: !profile ? '' : profile.email,
                feedback:''
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
        <Button className="add_feedback"  onClick={() => setModalShow(true)}>Click Here To Add Your Valueable Feedback (Comment)</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'#008aff', fontWeight:700}}>
                    Add Your Valuebale Feedback
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
                    {FEEDBACK.map(item =>(
                        <Row key={item.text}>
                            <Col xl={12}>
                                { 
                                    item.name === 'feedback' ?
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
                fontWeight:'500'}} disabled={!feedback.feedback} onClick={sendFeedback}>{loading ? 'Processing...' : 'Provide Feedback'}</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Feedback
