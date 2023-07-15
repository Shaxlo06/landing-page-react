import React from 'react';
import { come } from '../../data';
import './Come.css'

const Come = () => {
    return (
        <div className='come container'>
             <div className="past-bottom">
                <div className="past-bottom-left">
                    <div className='rec'></div>
                    <h5 className="past-bottom-title">Come together.</h5>
                    <p className="past-bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                </div>
                <ul className="past-bottom-right">
                {come.map((s)=>(
                <>
                <li className='come-item'>
                    <img src={s.icon} alt="" />
                    <h5>{s.name}</h5>
                </li>
                </>
            ))}
                </ul>
            </div>
        </div>
    );
}

export default Come;
