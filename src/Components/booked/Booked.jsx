import React from 'react';
import './Booked.css'

const Booked = () => {
    return (
        <div className='booked'>
            <div className="container">
                <div className="booked-content">
                    <div className="rec"></div>
                    <h3 className='booked-title'>We're already booked up for the spring — hurry up & secure your stay for the summer.</h3>
                    <p className='booked-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                    <button className='btn btn-white'>Contact</button>
                    <button className='btn btn-gray'>Book now</button>
                </div>
            </div>
        </div>
    );
}

export default Booked;
