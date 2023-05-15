import React from 'react';
import { MdCall, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';
import { MessengerChat } from "react-messenger-chat-plugin";


import './Contact.css';


const Contact = () => {
    return (
        <div className='contactArea'>
            <section id="contact">
                <div className="contactInner">
                    <div className="row my-5">
                        <h3 className='contactHead mb-5'>Contact</h3>
                        <div className="col-12 col-md-6">
                            <h4>Get in touch</h4>
                            <ul>
                                <li><span><MdCall /></span><a href="tel:+8801773229167">+8801773229167</a></li>
                                <li><span><MdCall /></span><a href="tel:+8801996722640">+8801996722640</a></li>
                                <li><span><IoLogoWhatsapp /></span><a href="https://wa.me/+8801626269764/?text='Hello" rel="noreferrer" target='_blank'>+8801626269764</a></li>
                                <li><span><MdEmail /></span><a href="mailto:ranarr.dev@gmail.com">ranarr.dev@gmail.com</a></li>
                                <li><span><ImLocation /></span>Rangpur,Bangladesh</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <h4 className='mt-4 mt-md-0'>
                                Drop a message
                            </h4>
                            <form action="https://formsubmit.co/ranarr.dev@gmail.com" method="POST">
                                <input type="text" name='name' placeholder='Name' required />
                                <input type="email" name='email' placeholder='Email' required />
                                <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
                                <button type='submit'>Submit</button>
                            </form>
                            <MessengerChat
                                pageId="101861642848604"
                                language="en_US"
                                themeColor={"#DC143C"}
                                bottomSpacing={50}                               
                            />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12 text-center">
                            <small className='footerText'>&copy; copyright Masud Rana 2023</small>
                            <br />
                            <span className="footerText">version 1.0.0</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
