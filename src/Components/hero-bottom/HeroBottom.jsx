import React from 'react';
import './HeroBottom.css'
import { info } from '../../data';

const HeroBottom = () => {
    return (
        <div className='hero-bottom'>
            <div className="container">
                <div className="hero-bottom-container">
                <div className='rec'></div>
                <ul className='info'>
                {info.map((i)=>(
                        <>
                        <li className='info-text'>{i.text}</li>
                        </>
                    ))}
                    {/* <a href="#">
                        <button className='btn'>Book now</button>
                    </a> */}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default HeroBottom;
