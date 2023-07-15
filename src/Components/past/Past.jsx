import React from 'react';
import './Past.css'
import { slide } from '../../data';
import { come } from '../../data';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slideImg from '../images/slideImg.png'

const Past = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        slidesToShow: 2
      };

    return (
        <div className='past'>
            <div className="container">
            <div className="past-content">
                    <div className='rec'></div>
                    <h5 className="past-title">Past guests.</h5>
                    <p className="past-text">Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House.</p>
            </div>
            <ul>
            <Slider {...settings}>
            {slide.map((s)=>(
                <>
                <li className='slide-item'>
                    <h5>{s.name}</h5>
                    <p>{s.info}</p>
                    <p>{s.author}</p>
                </li>
                </>
            ))}
            </Slider>
            </ul>
            <img className='slideImg' src={slideImg} alt="slideImg" />
            </div>
        </div>
    );
}

export default Past;
