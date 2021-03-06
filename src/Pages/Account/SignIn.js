import axios from 'axios';
import React,{ useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useProfile } from './Context.Provider';
import './style.css'

function SignIn() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(false);
    const {profile,setProfile}= useProfile();
    const History = useHistory();

    const [user,setUser] = useState({
        email:'',
        password:'',
    });
    const SIGNUP = [
        {
            name:'email',
            value:user.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'password',
            value:user.password,
            type:'password',
            text:'Enter Your Password'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const signin = async (e)=>{
        e.preventDefault();
        try{
            setloading(true);
            const signin = await axios.post('https://lifestylediseases.herokuapp.com/login',{
                email : user.email,
                role: 'user',
                password : user.password
            })
            setloading(false);
            setProfile(signin.data.login);
            setMessage(signin.data.message);
            setShow(true);
            setUser({
                email:'',
                password:''
            });
        }catch(e){
            setloading(true)
            console.log(e.message);
            setMessage(e.message);
            setloading(false);
        }
    }

   

    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Login Now</h3>
                <p>Login your self</p>
            </Row>
            <Form className="account_form_body mt-2">
                { 
                show ?
                    <Alert variant="info" onClose={() => {
                         setShow(false);
                         profile ?
                         History.push('/diseases')
                         :
                         History.push('/login')
                        }
                    } dismissible>
                        <p className='text-center'>{message}</p>
                    </Alert>
                    :
                    ''
                }
                {SIGNUP.map(item =>(
                    <Row key={item.text}>
                        <Col xl={6}>
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
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <p>Forgot Password? <Link to="/signup">Here.</Link></p>
                        <Button type="submit" onClick={signin} disabled={!user.email}>{loading ? 'Processing...' : 'Login Now'}</Button>
                        <p>You are Not Signup,Please <Link to="/signup">signup Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SignIn
