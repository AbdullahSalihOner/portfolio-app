import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Show",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nam nesciunt in rerum sunt accusantium, debitis placeat doloribus esse minima id nulla illum impedit voluptates, commodi omnis soluta  quod quasi autem nostrum consequatur obcaecati ut? Eligendifuga dolore repellat debitis perferendis illo qui commodi deserunt tempore?",
  },
  {
    avatar: AVTR2,
    name: "Dovlet Mammet",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nam nesciunt in rerum sunt accusantium, debitis placeat doloribus esse minima id nulla illum impedit voluptates, commodi omnis soluta  quod quasi autem nostrum consequatur obcaecati ut? Eligendifuga dolore repellat debitis perferendis illo qui commodi deserunt tempore?",
  },
  {
    avatar: AVTR3,
    name: "Reis İbo",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nam nesciunt in rerum sunt accusantium, debitis placeat doloribus esse minima id nulla illum impedit voluptates, commodi omnis soluta  quod quasi autem nostrum consequatur obcaecati ut? Eligendifuga dolore repellat debitis perferendis illo qui commodi deserunt tempore?",
  },
  {
    avatar: AVTR4,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nam nesciunt in rerum sunt accusantium, debitis placeat doloribus esse minima id nulla illum impedit voluptates, commodi omnis soluta  quod quasi autem nostrum consequatur obcaecati ut? Eligendifuga dolore repellat debitis perferendis illo qui commodi deserunt tempore?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name"> {name}</h5>
              <small className="client_review">
               {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
