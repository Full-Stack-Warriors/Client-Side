import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Bot.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useHistory } from 'react-router-dom';

function Bot() {
    const [serchMic, setSearchMic] = useState(false);
    const History = useHistory();
    const commands = [
      {
        command: 'Open * page',
        callback: (page) => {
            if(page === 'home'){
                History.push('/')
            }else if(page === 'symptom checker'){
                History.push('/symptomschecker');
            }else if(page === 'sign up' || page === 'signup'){
                History.push('/signup');
            }else{
                History.push('/'+page);
            }
        }
      },
      {
        command: 'please open project GitHub organisation',
        callback: () => window.open('https://github.com/Full-Stack-Warriors')
      },
      {
        command: 'please can you open Project leader GitHub profile',
        callback: () => window.open('https://github.com/pruthvi7384')
      },
      {
        command: 'open * now',
        callback: (url) => window.open('https://'+url)
      }
    ]
    const { transcript } = useSpeechRecognition({commands});
    const startSearchMic = ()=>{
        setSearchMic(true)
        SpeechRecognition.startListening({ language: 'en-IN' });
    }
    const endSearchMic = ()=>{
        setSearchMic(false)
        SpeechRecognition.stopListening();
    }
    return (
        <div className="bot_icon">
           
            <div className='assistan'>
                <div>
                    <p style={{color:'#008aff'}}>{transcript}</p>
                </div>
                <div className="assistan_lis">
                    {
                        serchMic
                        ?
                        <i className="fas fa-assistive-listening-systems" onClick={endSearchMic}></i>
                        :
                        <i className="fas fa-search" onClick={startSearchMic}></i>
                    }
                <Link to="/chat"><i className="fas fa-user-md"></i></Link>
                </div>
            </div>
        </div>
      
    )
}

export default Bot
