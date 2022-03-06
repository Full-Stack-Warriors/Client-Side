import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'
import PRUTHVI from '../../assets/pruthvi.png';
import Feedback from '../Home/Feedback';

function About() {
    const TEAM = [
        { 
            image:PRUTHVI,
            name:"Rajput Pruthviraj",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"B",
            rollno:"37",
            github:"https://github.com/pruthvi7384",
            linkdin:"https://www.linkedin.com/in/pruthviraj-rajput-131ba61b4/",
        },
        { 
            image:"",
            name:"Patil Kirti",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"B",
            rollno:"17",
            github:"",
            linkdin:"",
        },
        { 
            image:"",
            name:"Chaudhari Harshada",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"A",
            rollno:"21",
            github:"",
            linkdin:"",
        },
        { 
            image:"",
            name:"Chouhan Sumit",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"A",
            rollno:"27",
            github:"",
            linkdin:"",
        }
    ]
   
    return (
        <>
        <Container className="about_us mt-4">
            <Row id="about_us_heading">
                <h3>Welcome !</h3>
                <p>ABOUT US</p>
            </Row>
            <Row className="about_mission">
                <h5>About This Platform</h5>
                <Col xl={6} className="mt-3 text-center">
                    <img src="https://us.123rf.com/450wm/ssstocker/ssstocker1609/ssstocker160900170/63054234-healthy-lifestyle-heart-emblem-health-healthy-food-and-active-daily-routine-flat-icons-vector-banner.jpg?ver=6" className="img-responsive img-thumbnail img-fluid" alt=""/>
                </Col>
                <Col xl={6} className="mt-3">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Lifestyle diseases are common among the population today not only in India but also in almost every country. Lifestyle diseases are caused because of the habits that we have on a day to day basis. The way one lives his life is the major cause of it. It includes heart disease, hypertension, etc. which all may hear of. In our life also, one also comes across at least one person who is either suffering from such diseases or the diseases became the reason for his death. We also came across many such people who died because they were not aware of their disease and were left with no appropriate time for treatment. 
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;That is why we decided to develop the portal which will analyse the data entered by the user and will give the predictions of the diseases which he or she may have chances to suffer from. This not only gives the predictions but also gives you the preventive measures that are required to stay safe from the very common lifestyle diseases as well as in case of mild symptoms it provides you with the management techniques also. This project makes the person aware of his health so that he will have the treatment well in time if required and will save the lives of many people. This project covers three main aspects which are prediction, prevention and management of lifestyle diseases.
                    </p>
                </Col>
            </Row>
        </Container>
        <Feedback/>
        <Container className="about_us mt-4">
            <Row className="about_team">
            <h5>Our Developer Team</h5>
            { TEAM.map(team => (
                <Col key={team.name} xl="3" className="about_team_member text-center mt-3">
                    <img className="team_image" src={!team.image ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==' : `${team.image}`} alt=""/>
                    <h5>{team.name}</h5>
                    <h6>{team.branch}</h6>
                    <p>{team.class} / {team.section} / {team.rollno}</p>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href={`${team.github}`}><i className="fab fa-github"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={`${team.linkdin}`}><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </Col>
            ))
            }
            </Row>
        </Container>
        </>
    )
}

export default About
