import React from 'react';
import Certificate from '../img/certificate.png';

import './Experience.css';

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <h2 className='experienceText'>Experience</h2>
                <div className='experienceBox'>
                    <div className='leftSide'>
                        <h6>Front-end Web Developer Intern</h6>
                        <h4>NIFTY IT SOLUTION</h4>
                        <p>Shekhertek, Mohammadpur, Dhaka-1207</p>
                        <p>Sep 2023 -  Nov 2023</p>
                        <img src="https://niftyitsolution.com/images/nifty_logo.png" alt="" />
                    </div>
                    <div className='rightSide'>
                        <img src={Certificate} alt="Certificate" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience