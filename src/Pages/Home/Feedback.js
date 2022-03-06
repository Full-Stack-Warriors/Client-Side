import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { Carousel, Container, Row, Spinner } from 'react-bootstrap'

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isloading, setIsloading] = useState(false);

    useEffect(()=>{
        const getContactsInfo = async ()=>{
            try{
                setIsloading(true);
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/feedbackverify`);
                setFeedbacks(res.data);
                setIsloading(false);
            }catch(e){
                console.log(e.message);
            }
        }
        getContactsInfo();
        return ()=>{
            setFeedbacks([]);
        }
    },[]);

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
        <Container fluid className="feedback_section mt-4">
            <Row id="feedback_section_heading">
                <h3>People’s Feedback</h3>
                <p>Enjoy People’s Feedback</p>
            </Row>
            <Row >
                <Carousel>
                    {
                        feedbacks.length !== 0
                        ?
                        feedbacks.map(feedback => (
                            <Carousel.Item key={`${feedback._id}`}>
                                <div className="feedback_card">
                                    <div>
                                        <h4>{feedback.name}</h4>
                                        <p><span><i className="fas fa-quote-left"></i></span>  {feedback.feedback}  <span><i className="fas fa-quote-right"></i></span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                        :
                        <Carousel.Item>
                                <div className="feedback_card">
                                    <div>
                                        <p className="text-danger"><span><i className="fas fa-quote-left"></i></span>  Feedbacks Not Available !  <span><i className="fas fa-quote-right"></i></span></p>
                                    </div>
                                </div>
                        </Carousel.Item>
                    }
                </Carousel>
            </Row>
        </Container>
    )
}

export default Feedback
