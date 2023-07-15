import React from 'react';
import './Hero.css'
import heroLogo from '../images/heroLogo.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container hero-container">
               <div className="hero-content">
                <img className='hero-logo' src={heroLogo} alt="heroLogo" />
                <h3 className="hero-title">Experience the perfect combination of modern housing & natural scenery.</h3>
                <p className="hero-text">Located in Lofoten, norway</p>
               </div>
            </div>
        </div>
    );
}

export default Hero;
