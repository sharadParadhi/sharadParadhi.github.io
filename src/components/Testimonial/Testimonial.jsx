import React from "react"
import "./Testimonial.css"
import { Swiper,SwiperSlide } from "swiper/react"
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import profilePic5 from "../../img/profile5.jpg"
import profilePic6 from "../../img/profile6.jpg"
import 'swiper/css/pagination';
import {Pagination} from "swiper"
import "swiper/css/pagination"


export const Testimonial=()=>{
    const clients=
        [
            {
                img:profilePic1,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            },
            {
                img:profilePic2,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            },
            {
                img:profilePic3,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            },
            {
                img:profilePic4,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            },
            {
                img:profilePic5,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            }
            ,
            {
                img:profilePic6,
                review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officials molestiae quod temora laudntum, cumque error a nisiplaceat quae exerciationem, maiores reiceiendis! Eaquae dicta minima, iure maiores dolorum sed."
            }
        ]
    

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                        <span>Clients always get </span>
                <span>Expectional Work</span>
                <span>From me...</span>
                <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
                <div className="blur t-blur1" style={{background:"skyblue"}}></div>
            </div>

            <Swiper 
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {clients.map((ele,ind)=>(
                    <SwiperSlide  key={ind}>
                        <div className="testimonial">
                        <img src={ele.img} alt=""/>
                        <span>{ele.review}</span>
                        </div>
                      
                    </SwiperSlide>
                ))}
            </Swiper>


            <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
            
            

        </div>
    )
}