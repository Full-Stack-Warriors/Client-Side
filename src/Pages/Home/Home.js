import React from 'react'
import Contact from '../Contact/Contact';
import Feedback from './Feedback';
import './Home.css';
import HomeBanner from './Home_Banner';
import Services from './Services';
function Home() {
    return (
       <>
            <HomeBanner/>
            <Services/>
            <Feedback/>
            <Contact/>
       </>
    )
}

export default Home

