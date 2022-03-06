import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DiseaseDetailes from './DiseaseDetaile';
import { Container, Row, Spinner } from 'react-bootstrap';

function Disease() {
    // ===========Get Id From URL==========
    const {id} = useParams();
    // ================Find Disease Inforamation using id===============
    const [diseaseinformation, setDisease] = useState();
    const [isloading, setIsloading] = useState(true);
   
    useEffect(()=>{
        const getDiseasesInfo = async ()=>{
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/disease/${id}`);
                setDisease(res.data);
                setIsloading(false);
        }

        getDiseasesInfo();
    
        return ()=>{
            setDisease();
        }
    },[id]);

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
            <DiseaseDetailes isloading={isloading} diseaseinfo={diseaseinformation}/>
    )
}

export default Disease
