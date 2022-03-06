
import React,{ useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner} from 'react-bootstrap';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';
import './Diseases.css';
import InfoDisease from './InfoDisease';

function Diseases() {
    const [disease, setDisease] = useState([]);
    const [isloading, setIsloading] = useState(true);

    // =======For Searching Functionality=======
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const getDiseasesInfo = async ()=>{
            try{
                const res = await axios.get('https://lifestylediseases.herokuapp.com/alldiseaseverify');
                setDisease(res.data);
                setIsloading(false);
             }catch(e){
                 console.log(e.message);
             }
        }
        getDiseasesInfo();
        return ()=>{
           setDisease([]);
        }
    },[]);

    if(isloading){
        return(
            <Container style={{height:"100vh"}}className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }

    return (
        <Container className="Diseases_All mt-4">
            <Row id="Diseases_heading">
                <h3>Diseases</h3>
                <p>All Diseases Display Here.</p>
            </Row>
            <SearchBar search={search} setSearch={setSearch} />
            <Row className="mt-4">
                {
                    disease.length !== 0
                    ?
                    // eslint-disable-next-line array-callback-return
                    disease.filter((item)=>{
                        if(search === ""){
                            return item
                        }else if(item.desease_name.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }
                    }).map(item => (
                        <Col xl={4} key={item._id}>
                            <Card>
                                <Card.Img variant="top" src={item.detail.image !== '' ? `${item.detail.image}` : "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/chidrens-health/blounts-disease-teaser.ashx"} />
                                <Card.Body>
                                    <Card.Title>{item.desease_name}</Card.Title>
                                    <Card.Text>
                                        {item.detail.description !=='' ? `${item.detail.description.split(' ').slice(0, 25).join(' ').replace(/<.+?>/g, "")}...`
                                        : 'No description' }
                                    </Card.Text>
                                </Card.Body>
                                <InfoDisease item={item}/>
                            </Card>
                        </Col>
                    ))
                    :
                    <p className="text-danger text-center" style={{fontWeight:'700'}}>Diseases Information Not Found !</p>
                }
            </Row>
        </Container>
    
    )
}

export default Diseases
