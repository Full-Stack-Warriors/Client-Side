import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bot from '../Bot/Bot';

import './Footer.css';


function Footer() {
    const LINKS = [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/contact', text: 'Contact' },
      ]
      const HELP = [
        { to: '/symptomschecker', text: 'Check Your Symptoms.' },
        { to: '/chat', text: 'Lets Clear Your Douts.' },
        { to: '/', text: 'What Pepole Says ?' },
        { to: '/about', text: 'Why Important This Platform?' },
      ]
    return (
        <>
        <Bot/>
        <Container fluid className="Footer mt-5">
            <Row>
                <Col xl={4} className="Footer_Logo">
                    <Link to="/"><i className="fas fa-laptop-medical"></i> <span> E </span> Health Care</Link>
                    <ul className="footer_social">
                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </Col>
                <Col xl={4} className="Footer_Menu">
                    <p>Get To Know Us</p>
                    <ul>
                        {LINKS.map(item =>(
                            <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
                            ))
                        }
                    </ul>
                </Col>
                <Col xl={4} className="Footer_Help">
                    <p>Let Us Help You</p>
                    <ul>
                        <li><a target='_blank' rel='noopener noreferrer' href="https://ehealthcareadmin.netlify.app/">Register As A Doctor</a></li>
                        {HELP.map(item =>(
                            <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
                            ))
                        }
                    </ul>
                </Col>
            </Row>
            <Row className="Developer">
                <Col xl={12}>
                        <p>&copy; 2021-22 ~ E HEALTH CARE, All Rights Reserved.</p>
                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/Full-Stack-Warriors">Develped By ~ <span> <i className="fab fa-github"></i> BE Project Id 09.</span></a>
                </Col>
            </Row>
        </Container>
     </>
    )
}

export default Footer
