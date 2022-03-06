import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './Disease.css'
import SubNavigationBar from '../../Components/SubNavigationBar/SubNavigationBar';
import Quetion from './Quetion';

import Feedback from './Feedback';
import axios from 'axios';
import Comments from './Comments';
function DiseaseDetailes({diseaseinfo}) {
    const [isloading, setIsloading] = useState(true);
    const [doctorName, setDoctorName] = useState([]);
    const [doctorInfo, setDoctorInfo] = useState([]);

    useEffect(()=>{
        const getDoctorName = async ()=>{
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/profile/${diseaseinfo.doctor_id}`);
                setDoctorName(res.data);
        }
        getDoctorName();
        return ()=>{
            setDoctorName();
        }
    },[diseaseinfo.doctor_id]);

    useEffect(()=>{
        const getDoctorInfo = async ()=>{
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/doctor/${diseaseinfo.doctor_id}`);
                setDoctorInfo(res.data);
                setIsloading(false);
        }
        getDoctorInfo();
        return ()=>{
            setDoctorInfo();
        }
    },[diseaseinfo.doctor_id]);

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
        <>
        <Container>
            <Row className="mt-4">
                <SubNavigationBar id={diseaseinfo._id} name={diseaseinfo.desease_name}/>
            </Row>
        </Container>
        <Container className="disease_page">
            <Row className="disease_heading">
                <h3>Disease <span> {diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span></h3>
                <p>Disease <span> {diseaseinfo.desease_name ? diseaseinfo.desease_name : ''} </span> Information</p>
            </Row>
            <Row className="disease_info">
                <Col xl={6} className="mb-2">
                    <img className="disease_image" src={diseaseinfo.detail.image !== '' ? `${diseaseinfo.detail.image}` : "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/chidrens-health/blounts-disease-teaser.ashx"} alt="" />
                </Col>
                <Col xl={6}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{diseaseinfo.detail.description !== '' ? diseaseinfo.detail.description : 'Description Not Mentioned !'}</p>
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span> Disease <span> Symptoms </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        diseaseinfo.detail.symptoms.length !== 0
                        ?
                        diseaseinfo.detail.symptoms.map((symptom,index) => (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span>  {symptom}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Symptoms Detailes Not Mentioned !</p>
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span> Disease <span> Precautions </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        diseaseinfo.detail.precaution.length !== 0
                        ?
                        diseaseinfo.detail.precaution.map((precaution, index) => (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span>  {precaution}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Precaution Detailes Not Mentioned !</p>
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span> Disease <span> Medcines </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        diseaseinfo.detail.medicine.length !==0
                        ?
                        diseaseinfo.detail.medicine.map((medcine, index) => (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span>  {medcine}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Medicine Detailes Not Mentioned !</p>
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span> Disease <span> Vaccine </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        diseaseinfo.detail.vaccine.length !==0
                        ?
                        diseaseinfo.detail.vaccine.map((vaccine,index) => (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span>  {vaccine}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Vaccine Detailes Not Mentioned !</p>
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{diseaseinfo.desease_name ? diseaseinfo.desease_name : ''}</span> Disease <span>Most Predicated Area </span></h4>
                <Col xl={8} className="mt-2">
                    <p><span><i className="fas fa-hand-point-right"></i></span> <b>PIN CODE :</b> <b style={{color:'#008aff'}}>{
                        diseaseinfo.most_predicated_area.pin_code === 0 
                        ?
                        <span className="text-danger text-center" style={{fontWeight:'600'}}>Pin Code Not Mentioned !</span>
                        :
                        diseaseinfo.most_predicated_area.pin_code
                    }</b></p>
                    <p><span><i className="fas fa-hand-point-right"></i></span> <b>CITY :</b> <b style={{color:'#008aff'}}>{
                        diseaseinfo.most_predicated_area.city === 'NA' ?
                        <span className="text-danger text-center" style={{fontWeight:'600'}}>City Detailes Not Mentioned !</span>
                         :
                        diseaseinfo.most_predicated_area.city
                    }</b></p>
                    <p><span><i className="fas fa-hand-point-right"></i></span> <b>AREA :</b> <b style={{color:'#008aff'}}>{
                        diseaseinfo.most_predicated_area.area === 'NA' ?
                        <span className="text-danger text-center" style={{fontWeight:'600'}}>Area Detailes Not Mentioned !</span>
                        :
                        diseaseinfo.most_predicated_area.area
                    }</b></p>
                </Col>
            </Row>
        </Container>
        <Container className="disease_add_info mt-3">
            <Row className="align-items-center">
                <Col xl={2}  className="profile_doctor_img text-center" >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" alt="" />
                </Col>
                <Col xl={10} className="doctor_info">
                    <p><b>Disease Added Date ~</b> <Moment local date={diseaseinfo.created_date} /></p>
                    <p>Added By ,</p>
                    <h5>{doctorName.name}</h5>
                    <h6>{doctorInfo.Education_Detailes.degree !== '' ? doctorInfo.Education_Detailes.degree : ''}</h6>
                    <p><b>Email On ~</b> {doctorName.email}</p>
                    <p><b>About ~</b> {doctorInfo.about !== '' ? doctorInfo.about : ''}.</p>
                    <p><b>Joining Date ~</b> <Moment local date={doctorName.crteatedAt}/></p>
                </Col>
            </Row>
        </Container>
        <Container className="disease_btns mt-3">
            <Row className="justify-content-center align-items-center">
                <Col xl={4} className="text-center mt-2" >
                    <Quetion d_id = {diseaseinfo._id}/>
                </Col>
                <Col xl={4} className="text-center mt-2">
                    <Feedback id = {diseaseinfo._id}/>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Comments id = {diseaseinfo._id}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default DiseaseDetailes
