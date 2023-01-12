import React from 'react';
import './Home.css';

import DisplayPic from '../img/dp.jpg';
import { TypeAnimation } from 'react-type-animation';

import { BsStarFill } from 'react-icons/bs';
import { FaFacebookF,FaGithub } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { ImLinkedin2 } from 'react-icons/im';
import { SiFreelancer } from 'react-icons/si';

const Home = () => {
    return (
        <div className='Home'>
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={DisplayPic} alt="" className=" dpPik img-fluid" />
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/fb.rana.rr" rel="noreferrer" target={'_blank'}><span><RiFacebookFill /></span></a>
                        <a href="https://www.linkedin.com/in/rana-rr" rel="noreferrer" target={'_blank'}><span><ImLinkedin2 /></span></a>
                        <a href="https://github.com/Ranagithubrr" rel="noreferrer" target={'_blank'}><span><FaGithub /></span></a>
                        <a href="https://www.freelancer.com/hireme/ranarr122" rel="noreferrer" target={'_blank'}><span><SiFreelancer /></span></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h4 className='my-4 my-md-0'>welcome to my portfolio {FaFacebookF} </h4>
                    <h1>Hi, <span>{RiFacebookFill}</span> I'm <span>Masud <span>R</span>ana</span></h1>
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
                    <button className='cbBtn'>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Home
