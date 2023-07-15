import React from 'react';
import './Sleep.css'
import { sleep } from '../../data';

const Sleep = () => {
    return (
        <div className='sleep'>
            <div className="container">
                <div className="sleep-content">
                    <div className='rec'></div>
                    <h5 className="sleep-title">Sleeping arrangements.</h5>
                    <p className="sleep-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
                </div>
                    <ul className='sleep-card'>
                    {sleep.map((s)=>(
                        <>
                        <li className='card'>
                            <img className='card-img' src={s.icon} alt="" />
                            <h5>{s.name}</h5>
                            <p>{s.info}</p>
                        </li>
                        </>
                    ))}
                    </ul>
            </div>
        </div>
    );
}

export default Sleep;
