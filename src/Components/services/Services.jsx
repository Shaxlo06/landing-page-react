import React from 'react';
import './Services.css'
import { services } from '../../data';

const Services = () => {
    return (
        <div className='services'>
            <div className="container">
                <div className="services-content">
                    <div className='rec'></div>
                    <h5 className="services-title">The perfect escape.</h5>
                    <p className="services-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
                </div>
                <ul className='services-list'>
                    {services.map((s)=>(
                        <>
                        <li className='services-item'>
                            <div className="services-left">
                                <img className='services-img' src={s.icon} alt="" />
                            </div>
                            <div className="services-right">
                                <h5>{s.name}</h5>
                                <p>{s.info}</p>
                            </div>
                        </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Services;
