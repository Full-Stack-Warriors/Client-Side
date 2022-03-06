import axios from 'axios';
import React,{ useState } from 'react'
import { Alert, Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap'
import { useProfile } from '../Account/Context.Provider';
import './Contact.css'
function Contact() {
    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState('');
    const {profile} = useProfile();
    const [contacts,setContact] = useState({
        name:profile ? profile.name : '',
        email:profile ? profile.email : '',
        subject:'',
        message:''
    });
    const SIGNUP = [
        {
            name:'name',
            value:contacts.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:contacts.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'subject',
            value:contacts.subject,
            type:'text',
            text:'Enter Your Subject'
        },
        {
            name:'message',
            value:contacts.message,
            type:'text',
            text:'Enter Your Message',
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setContact({...contacts, [name]:value});
    }

    const contact_Info = async (e)=>{
        e.preventDefault();
        try{
            setloading(true);
            const contact = await axios.post('https://lifestylediseases.herokuapp.com/contact',{
                user_id: profile ? profile._id : 'NA',
                name: contacts.name,
                email: contacts.email,
                subject: contacts.subject,
                message: contacts.message
            })
            setloading(false);
            setMessage(contact.data.message);
            setShow(true);
            setContact({
                name:profile ? profile.name : '',
                email:profile ? profile.email : '',
                subject:'',
                message:''
            });
        }catch(e){
            setloading(true)
            console.log(e.message);
            setMessage(e.message);
            setShow(true);
            setloading(false);
        }
    }
    const contact_Details = [
        {
            icon:'fas fa-map-marker-alt',
            text:'155 Main Street, 17B, Brooklyn, NY'
        },
        {
            icon:'fas fa-phone-alt',
            text:'800-123-4567'
        },
        { 
            icon:'far fa-envelope',
            text:'example@healthcare.com'
        }
    ]
    return (
        <Container className="Contact mt-4">
            <Row id="contact_heading">
                <h3>Get In Touch</h3>
                <p>Contact Information</p>
            </Row>
            { 
                show ?
                    <Alert variant="info" onClose={() => setShow(false)} dismissible>
                    <p className='text-center'>{message}</p>
                    </Alert>
                    :
                    ''
            }
            <Row className="contact_body mt-2">
                <Col xl={6}>
                    { contact_Details.map(info => (
                        <div key={info.text} className="contact_info_card">
                            <i className={info.icon}></i>
                            <p>{info.text}</p>
                        </div>
                     ))
                    }
                </Col>
                <Col xl={6}>
                    <Form className="account_form_body mt-2">
                        {SIGNUP.map(item =>(
                            <Row key={item.text}>
                                <Col xl={12}>
                                    { 
                                        item.name === 'message' ?
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
                        <Row>
                            <Col xl={12} className="account_button text-center mt-2">
                                <Button type="submit" disabled={!contacts.message} onClick={contact_Info}>{loading ? 'Sending...' : 'Send Message'}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
