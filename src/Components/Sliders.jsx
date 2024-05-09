import React from 'react';
import Slider from "react-slick";
import Reviews from './Reviews';
import './Sliders.css';
import Profile from '../img/Clients/profile.webp';
import {MdArrowBackIosNew} from 'react-icons/md';

const Sliders = () => {



  const settings = {
    className: "center",
    autoplay: true,
    dots:false,
    arrows:false,
    autoplaySpeed: 5000,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    

  };

 


  return (
    <div className='SliderArea mb-4 mt-5'>
      <h2 className='mb-4'>Clients</h2>
      <Slider {...settings} >
        <div>
          <Reviews
            ClientName="Joel D"
            Flag="https://www.worldometers.info/img/flags/cm-flag.gif"
            Country="Yaoundé, Cameroon"
            Photo="https://cdn5.f-cdn.com/ppic/195741411/logo/7420670/0OszG/profile_logo_XPTTX_20ff69a866b914767d0dab5b5bf59ef1.jpg?image-optimizer=force&format=webply&width=336"
            Project="I need a very simple React form with a single Textarea"
            Review="Very good React developer and patient with changes. Totally recommend!"
          />
        </div>
        <div>
          <Reviews
            ClientName="Vasanth K"
            Flag="https://www.worldometers.info/img/flags/small/tn_in-flag.gif"
            Country="Hyderabad, India"
            Photo="https://cdn2.f-cdn.com/ppic/168025312/logo/53429666/4OLuY/profile_logo_LinkedIn_53429666.jpg?image-optimizer=force&width=280"
            Project="Contest for UX of fallov.com"
            Review="Loved working with him. Good job, Masud!"
          />
        </div>
        <div>
          <Reviews
            ClientName="Abu B"
            Flag="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
            Country="United Kingdom"
            Photo={Profile}
            Project="Turn a pop up contact form into a URL link"
            Review="Thanks you for a very quick service"
          />
        </div>
        <div>
          <Reviews
            ClientName="Aryeh H"
            Flag="https://www.worldometers.info/img/flags/small/tn_us-flag.gif"
            Country="Brooklyn, United States"
            Photo="https://cdn5.f-cdn.com/ppic/205726997/logo/44367048/lCT37/CROPPED_profile_logo_ELBGH_366c06b79aeda79bed688bb81912a290.png?image-optimizer=force&width=280"
            Project="Build a form to generate a link"
            Review="Good Communication"
          />
        </div>
        <div>
          <Reviews
            ClientName="Mhmad M"
            Flag="https://www.worldometers.info/img/flags/is-flag.gif"
            Country="Tel Aviv, Israel"
            Photo={Profile}
            Project="Edit one js page"
            Review="Good work bro"
          />
        </div>
        <div>
          <Reviews
            ClientName="Mhmad M"
            Flag="https://www.worldometers.info/img/flags/is-flag.gif"
            Country="Tel Aviv, Israel"
            Photo={Profile}
            Project="Edit 44444444"
            Review="Good person good job"
          />
        </div>
        <div>
          <Reviews
            ClientName="Aryeh H"
            Flag="https://www.worldometers.info/img/flags/small/tn_us-flag.gif"
            Country="Brooklyn, United States"
            Photo="https://cdn5.f-cdn.com/ppic/205726997/logo/44367048/lCT37/CROPPED_profile_logo_ELBGH_366c06b79aeda79bed688bb81912a290.png?image-optimizer=force&width=280"
            Project="Build functionality in form"
            Review="Very fast and professional"
          />
        </div>
      </Slider>
    </div>
  )
}

export default Sliders
