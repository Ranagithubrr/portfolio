import React from 'react'
import './Reviews.css';
import { MdFormatQuote } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';

const Reviews = (props) => {
    const { ClientName, Flag, Country, Photo, Project, Review } = props;
    return (
        <section id="client">
            <div className='Review'>
                <div className="ReviewTop">
                    <div>
                        <img src={Photo} alt="profile" />
                    </div>
                    <div className='clientDesc'>
                        <h4>{ClientName} <span><img
                            src={Flag}
                            alt=""
                            data-toggle="tooltip"
                            data-placement="top" title={Country} /></span></h4>
                        <h6>Entreprenour</h6>
                        <h5>{Project}</h5>
                        <span>Market Place <a href="https://www.freelancer.com/u/ranarr122" target='_blank' rel='noreferrer'>Freelancer</a></span>

                    </div>
                </div>
                <div className="ReviewBottom">
                    <p>
                        <span className='leftQuote'><MdFormatQuote /></span>
                        {Review}
                        <span className='RightQuote'><MdFormatQuote /></span>
                    </p>
                    <div className="ratingsBox">
                        <span><BsStarFill /></span>
                        <span><BsStarFill /></span>
                        <span><BsStarFill /></span>
                        <span><BsStarFill /></span>
                        <span><BsStarFill /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
