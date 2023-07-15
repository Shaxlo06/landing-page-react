import React from 'react';
import logo from '../images/logo.svg'
import d from '../images/d.svg'
import f from '../images/f.svg'
import i from '../images/i.svg'
import { footerList } from '../../data';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-top">
                    <ul className="footer-top-left">
                        <p>PAGES</p>
                        {footerList.map((f)=>(
                            <li className='footerlist-item'>{f.name}</li>
                        ))}
                    </ul>
                    <ul className="footer-top-middle">
                        <p>Social Media</p>
                        <ul>
                            <li><a href="#"><img src={d} alt="" /></a></li>
                            <li><a href="#"><img src={f} alt="" /></a></li>
                            <li><a href="#"><img src={i} alt="" /></a></li>
                        </ul>
                    </ul>
                    <form action="#" className="footer-top-right">
                        <p>Newsletter</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <input type="email" placeholder='Email' />
                    </form>
                </div>
                <div className="footer-bottom">
                    <img src={logo} alt="logo" />
                    <p>© Guest House, LLC. All rights reserved. Powered by Webflow</p>
                    <p>+47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310 Kabelvag, Norway</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
