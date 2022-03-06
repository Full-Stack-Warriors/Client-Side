import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Services() {
    const SERVICES = [
        { 
            icon:<i className="fas fa-rocket"></i>,
            text:"24 / 7",
            info:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            icon:<i className="fas fa-heartbeat"></i>,
            text:"Expert Consultation",
            info:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            icon:<i className="fas fa-hospital-user"></i>,
            text:"Intensive Care",
            info:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            icon:<i className="fas fa-stethoscope"></i>,
            text:"Symtoms Chacker",
            info:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        }
    ]
    return (
        <Container className="Services mt-4">
            <Row id="services_heading">
                <h3>Services</h3>
                <p>Our Offered Services</p>
            </Row>
            <Row className="services_section">
                {
                    SERVICES.map(service => (
                        <Col xl={3} key={service.text} className="mt-3">
                            <div className="service_card">
                                {service.icon}
                                <h5>{service.text}</h5>
                                <p>{service.info}</p>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Services
