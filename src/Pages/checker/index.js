import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './SymtomsChecker.css'
import Home from './Components/Home'
function SymtomsChecker() {
    return (
        <Container className="symtoms_checker mt-4">
            <Row id="symtoms_checker_heading">
                <h3>Symtoms Checker</h3>
                <p>Checke Your Symtoms Now !</p>
            </Row>
            <Home/>
        </Container>
    )
}

export default SymtomsChecker
