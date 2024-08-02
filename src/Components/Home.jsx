import React  from 'react';
import './Home.css';
import WhatsAppChat from '../img/whatsapp.png';

import DisplayPic from '../img/dp2.jpg';
import { TypeAnimation } from 'react-type-animation';
import Resume from '../docs/resume.pdf';
import panda from '../img/panda.png';

import {FaGithub } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { ImLinkedin2 } from 'react-icons/im';
import { SiFreelancer } from 'react-icons/si';

import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {    
    const [showDiv,setShowDiv] = useState('hideGreatingDiv');
    const [showChat,setShowChat] = useState('');
    useEffect(()=>{
        setTimeout(()=>{
            setShowDiv('');
        },5000);
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setShowChat('showChat');
        },3000);
    },[])
    const YeahClicked = () =>{
        setShowDiv('hideGreatingDiv')
    }
    return (
        <div className='Home'>
            <div className={`greetingDiv ${showDiv}`}>
                <img src={panda} alt="" className='img-fluid' />
                <div className={`greatingBox`}>
                    <h6>Hi there, would you like to connect with me right Now ?</h6>
                    <div className='confirmingBox'>
                        <span onClick={YeahClicked}><a href="#contact" className='yeahSure'>Yeah Sure</a></span>
                        <span className='nowNow' onClick={YeahClicked}>Not Now</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12  col-md-6 col-lg-5">
                    <div className="cardDiv">
                        <div className="front-face">
                            <div className="contents front">
                            </div>
                        </div>
                        <div className="back-face">
                            <div className="contents back">
                                <img src={DisplayPic} alt="" className='img-fluid' />
                                <h4>Front-end web developer</h4>
                                <div className="socialIcons">
                                    <a href="https://www.facebook.com/fb.rana.rr" rel="noreferrer" target={'_blank'}><span><RiFacebookFill /></span></a>
                                    <a href="https://www.linkedin.com/in/rana-rr" rel="noreferrer" target={'_blank'}><span><ImLinkedin2 /></span></a>
                                    <a href="https://github.com/Ranagithubrr" rel="noreferrer" target={'_blank'}><span><FaGithub /></span></a>
                                    <a href="https://www.freelancer.com/hireme/ranarr122" rel="noreferrer" target={'_blank'}><span><SiFreelancer /></span></a>
                                </div>
                                <a href='#contact' className='connectBtn mt-2'>Connect With Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/fb.rana.rr" rel="noreferrer" target={'_blank'}><span><RiFacebookFill /></span></a>
                        <a href="https://www.linkedin.com/in/rana-rr" rel="noreferrer" target={'_blank'}><span><ImLinkedin2 /></span></a>
                        <a href="https://github.com/Ranagithubrr" rel="noreferrer" target={'_blank'}><span><FaGithub /></span></a>
                        <a href="https://www.freelancer.com/hireme/ranarr122" rel="noreferrer" target={'_blank'}><span><SiFreelancer /></span></a>
                    </div>
                </div>
                <div className="col-12  col-md-6 col-lg-7">
                    <h4 className='my-4 my-md-0'>Hello! I am</h4>
                    <h1>Masud <span>R</span>ana</h1>
                    <h3>I'm a <span>
                        <TypeAnimation
                            sequence={[
                                ' Front End Developer', // Types 'One'
                                2000, // Waits 1s
                                ' Web Developer', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                ' UI Designer', // Types 'Three' without deleting 'Two'
                                2000,
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}

                            cursor={false}
                            repeat={Infinity}
                        />
                    </span>
                    </h3>
                    <p>Welcome to my professional portfolio website! I am a front-end developer with a passion for creating visually appealing and user-friendly websites using MERN stack, specifically React. My portfolio showcases my diverse range of projects and skills
                        <br />
                        <br />
                    </p>
                    <div className='cbBtn'>
                    <a href={Resume} download className=''>Download CV</a>
                    <div className="inner"></div>
                    </div>
                    
                </div>
            </div>
            <div className={`whatsAppChat ${showChat}`}>
                <a href="https://wa.me/+8801996722640/?text=%27Hello">
                    <img src={WhatsAppChat} alt="whatsapp" />
                </a>
            </div>
        </div>
    )
}

export default Home
