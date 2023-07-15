import React from 'react';
import './Weekend.css'
import sectionBg from '../images/sectionBg.png'

const Weekend = () => {
    return (
        <div className='weekend'>
            <div className="container weekend-container">
                <div className='rec'></div>
                <h3 className="weekend-title">The Guest House is the perfect weekend getaway cabin.</h3>
                <img className='sectionBg' src={sectionBg} alt="secondbg" />
                {/* This img not found in netlify */}
            </div>
        </div>
    );
}

export default Weekend;
