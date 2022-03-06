import React,{ useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useSound from 'use-sound';
import boopSfx from '../../assets/audio.mp3';
import './SearchBar.css'

function SearchBar({search, setSearch}) {
    // ========Speach Recorganation Functions========
    const { transcript } = useSpeechRecognition();

    // =========Set Mic Is On or Off=======
    const [micIcon, setMicicon] = useState(false);

    // =========Set Searach Input ===========
    const [input, setInput] = useState(search);

    if(micIcon===false){
        setSearch(input)
    }else{
        setSearch(transcript);
    }

    // ======Set Pay=======
    const [play] = useSound(boopSfx);

    // =========input handaler======
    const inputhandler = (e)=>{
        e.preventDefault();
        setInput(e.target.value);
    }
   
    // =======For Speach Recorgation======
    const startspeachSearchHandaler = ()=>{
        play();
        setMicicon(true);
        SpeechRecognition.startListening({ language: 'en-IN' });
    }

    // ========For Stop Speach Recorgation=====
    const stopspeachSearchHandaler = ()=>{
        play();
        setInput(search);
        setMicicon(false);
        SpeechRecognition.stopListening();
    }

    return (
        <Row className="SearchBar mt-2">
            <Col xl={6} className="search">
                <input type="text" value={search} onChange={inputhandler} placeholder="Search Disease Here..." />
                {
                    micIcon
                    ?
                    <i className="fas fa-microphone" onClick={stopspeachSearchHandaler}></i>
                    :
                    <i className="fas fa-microphone-slash" onClick={startspeachSearchHandaler}></i>
                }
            </Col>
        </Row>
    )
}

export default SearchBar