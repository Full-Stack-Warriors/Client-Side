import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

function InfoDisease({item}) {
    const [doctorName, setDoctorName] = useState([]);
    const [comments, setComments] = useState('');

    useEffect(()=>{
        const getDoctorName = async ()=>{
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/profile/${item.doctor_id}`);
                setDoctorName(res.data.name);
        }
        getDoctorName();
        return ()=>{
            setDoctorName();
        }
    },[item.doctor_id]);

    useEffect(()=>{
        const getDiseasesInfo = async ()=>{
                const res = await axios.get(`https://lifestylediseases.herokuapp.com/feedbackverify/${item._id}`);
                setComments(res.data);
        }

        getDiseasesInfo();
    
        return ()=>{
            setComments([]);
        }
    },[item._id]);

    return (
        <div className="Footer__Card">
            <ul>
                <li><Link to="/diseases"><i className="fas fa-user-md"></i> <span> {doctorName ? doctorName : 'NA'}</span></Link></li>
                <li><Link to="/diseases"><i className="far fa-clock"></i> <span> <Moment local format='DD/MM/YYYY HH:MM' date={item.created_date} /></span></Link></li>
                <li><Link to="/diseases"><i className="fas fa-comments"></i> <span> {comments.length <=9 ? `0${comments.length}` : comments.length} </span></Link></li>
                <li><Link to={`/disease/${item._id}`}><Button >Read More</Button></Link></li>
            </ul>
        </div>
    )
}

export default InfoDisease
