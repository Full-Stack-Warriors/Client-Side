import React, { useState, useEffect } from 'react'
import './Profile.css'
import { Container, Row, Col, Accordion, Spinner } from 'react-bootstrap';
import { useProfile } from '../Account/Context.Provider';
import { useHistory } from 'react-router';
import Moment from 'react-moment';
import axios from 'axios';
import EditProfile from './EditProfile';
function Profile() {
   const { profile } = useProfile();
   const [isloading, setIsloading] = useState(false);
   const [quections, setQuection] = useState([]);
   const [feedbacks, setFeedbacks] = useState([]);
   const [contacts, setContacts] = useState([]);
   const History = useHistory();

   if(!profile){
        History.push('/');
   }

   useEffect(()=>{
        const getDiseasesInfo = async ()=>{
            try{
                setIsloading(true);
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/quectionuser/${profile.email}`);
                setQuection(res.data);
                setIsloading(false);
            }catch(e){
                console.log(e.message);
            }
        }
        getDiseasesInfo();
        return ()=>{
            setQuection([]);
        }
    },[profile.email]);

    useEffect(()=>{
        const getFeedbacksInfo = async ()=>{
            try{
                setIsloading(true);
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/feedback/${profile.email}`);
                setFeedbacks(res.data);
                setIsloading(false);
            }catch(e){
                console.log(e.message);
            }
        }
        getFeedbacksInfo();
        return ()=>{
            setFeedbacks([]);
        }
    },[profile.email]);

    useEffect(()=>{
        const getContactsInfo = async ()=>{
            try{
                setIsloading(true);
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/contact/${profile.email}`);
                setContacts(res.data);
                setIsloading(false);
            }catch(e){
                console.log(e.message);
            }
        }
        getContactsInfo();
        return ()=>{
            setContacts([]);
        }
    },[profile.email]);

    if(isloading){
        return(
            <Container style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>{profile ? profile.name : ''}</span> Profile</h3>
                <p>Your Profile And Quetion Ask History Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span>{profile ? profile._id : ''}</span></li>
                        <li>Name : <span>{profile ? profile.name : ''}</span></li>
                        <li>Email : <span>{profile ? profile.email : ''}</span></li>
                        <li>Join Date : <span><Moment local date={profile ? profile.crteatedAt : new Date()}/></span></li>
                        <li>Address : </li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; City : <span>{profile ? profile.address.city : ''}</span></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; Area : <span>{profile ? profile.address.area : ''}</span></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; Pin Code : <span>{profile ? profile.address.pin_code : ''}</span></li>
                    </ul>
               </Col>
            </Row>
            <Row className="profile mt-2">
                <Col xl="4" className="text-center">
                    <EditProfile id={profile._id}/>
                </Col>
            </Row>
            <Row className="quection_profile mt-4">
                <h3><span>Your Quection </span> Asked</h3>
                <p>Your Asked Quection Detailes Available Here</p>
                <Col xl="6" className="mt-2">
                    <Accordion flush>
                        {
                            quections.length !== 0
                            ?
                            quections.map(quection => (
                                <Accordion.Item key={quection._id} eventKey={quection._id}>
                                    <Accordion.Header>{quection.question} </Accordion.Header>
                                    <Accordion.Body>
                                        Date Of Quection ~ <Moment local date={quection.ask_date}/>
                                        <p></p>
                                        {
                                            quection.answer !=='NA' ?
                                                quection.answer
                                                :
                                                'Answer Is Not Found ! Sorry For That We try to answer your quection as per as posibale. Thank You For Quectioning !'
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Quections Detailes Not Found !</p>
                        }
                    </Accordion>
               </Col>
            </Row>
            <Row className="quection_profile mt-4">
                <h3><span>Your Provided </span> Feedback</h3>
                <p>Your Provided Feedback Detailes Available Here</p>
                <Col xl="6" className="mt-2">
                    <Accordion flush>
                        {
                            feedbacks.length !== 0
                            ?
                            feedbacks.map(feedback => (
                                <Accordion.Item key={feedback._id} eventKey={feedback._id}>
                                    <Accordion.Header><Moment local date={feedback.feedback_date}/> </Accordion.Header>
                                    <Accordion.Body>
                                        {
                                                feedback.feedback
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Feedbacks Detailes Not Found !</p>
                        }
                    </Accordion>
               </Col>
            </Row>
            <Row className="quection_profile mt-4">
                <h3><span>Your Contact </span> Detailes</h3>
                <p>Your Privious Contact Detailes Available Here</p>
                <Col xl="6" className="mt-2">
                    <Accordion flush>
                        {
                           contacts.length !== 0
                            ?
                            contacts.map(contact => (
                                <Accordion.Item key={contact._id} eventKey={contact._id}>
                                    <Accordion.Header>{contact.subject}</Accordion.Header>
                                    <Accordion.Body>
                                        Date Of Contact ~ <Moment local date={contact.contact_date}/>
                                        <p></p>
                                        Message ~  {contact.message}
                                        <p></p>
                                        Response ~  

                                            {
                                                contact.answer === 'NA'
                                                ?
                                                ' Responce Not Available, Sorry For That ! Our Team Try To Contact You Within 24 Hours !'
                                                :
                                                 contact.answer
                                            }
                                    
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Contact Detailes Not Found !</p>
                        }
                    </Accordion>
               </Col>
            </Row>
        </Container>
    )
}

export default Profile
